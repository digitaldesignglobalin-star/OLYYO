import { Controller, Get, Post, Patch, Body, Param, Query, BadRequestException } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { calculateDistance } from './utils';

@Controller('orders')
export class OrderController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Post()
  async placeOrder(
    @Body()
    body: {
      userId: string;
      restaurantId: number;
      totalAmount: number;
      address: string;
      paymentMethod: string;
      items: Array<{ menu_item_id: number; quantity: number; price: number }>;
    },
  ) {
    const { userId, restaurantId, totalAmount, address, paymentMethod, items } = body;

    if (!userId || !restaurantId || !totalAmount || !address || !paymentMethod || !items || items.length === 0) {
      throw new BadRequestException('Missing order details.');
    }

    const supabase = this.supabaseService.getClient();
    const orderId = `OLY-${Math.floor(100000 + Math.random() * 900000)}`;

    // Get platform settings for commissions
    const { data: settings } = await supabase.from('platform_settings').select('*').single();
    let kitchen_earnings = 0;
    let rider_earnings = 0;
    let super_admin_commission = 0;

    if (settings) {
      kitchen_earnings = totalAmount * (settings.kitchen_commission_percent / 100);
      rider_earnings = totalAmount * (settings.rider_commission_percent / 100);
      super_admin_commission = totalAmount * (settings.super_admin_commission_percent / 100);
    }

    // 1. Insert order
    const { error: orderError } = await supabase.from('orders').insert({
      id: orderId,
      user_id: userId,
      restaurant_id: restaurantId,
      total_amount: totalAmount,
      address,
      payment_method: paymentMethod,
      status: 'pending',
      kitchen_earnings,
      rider_earnings,
      super_admin_commission
    });

    if (orderError) {
      throw new BadRequestException(`Failed to create order: ${orderError.message}`);
    }

    // 2. Insert order items
    const orderItemsToInsert = items.map((item) => ({
      order_id: orderId,
      menu_item_id: item.menu_item_id,
      quantity: item.quantity,
      price: item.price,
    }));

    const { error: itemsError } = await supabase.from('order_items').insert(orderItemsToInsert);

    if (itemsError) {
      // Rollback order
      await supabase.from('orders').delete().eq('id', orderId);
      throw new BadRequestException(`Failed to save order items: ${itemsError.message}`);
    }

    // Fetch the inserted order with details to return
    const { data: orderData } = await supabase
      .from('orders')
      .select('*, restaurants(name)')
      .eq('id', orderId)
      .single();

    return {
      success: true,
      order: orderData,
    };
  }

  @Get()
  async getAllOrders(@Query('status') status?: string) {
    const supabase = this.supabaseService.getClient();
    let query = supabase.from('orders').select('*, users(phone, name), restaurants(name)');

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query.order('created_at', { ascending: false });
    if (error) {
      throw new BadRequestException(`Failed to fetch orders: ${error.message}`);
    }
    return data;
  }

  @Get('active/:userId')
  async getActiveOrder(@Param('userId') userId: string) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase
      .from('orders')
      .select('*, restaurants(name)')
      .eq('user_id', userId)
      .not('status', 'in', '("delivered","cancelled")')
      .order('created_at', { ascending: false });

    if (error) {
      throw new BadRequestException(`Failed to fetch active order: ${error.message}`);
    }

    return data && data.length > 0 ? data[0] : null;
  }

  @Get('user/:userId')
  async getUserOrders(@Param('userId') userId: string) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase
      .from('orders')
      .select('*, restaurants(name)')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      throw new BadRequestException(`Failed to fetch user orders: ${error.message}`);
    }
    return data;
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    const supabase = this.supabaseService.getClient();
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*, restaurants(name)')
      .eq('id', id)
      .single();

    if (orderError || !order) {
      throw new BadRequestException('Order not found.');
    }

    const { data: items, error: itemsError } = await supabase
      .from('order_items')
      .select('*, menu_items(name)')
      .eq('order_id', id);

    if (itemsError) {
      throw new BadRequestException('Failed to fetch order items.');
    }

    return {
      ...order,
      items,
    };
  }

  @Patch(':id/status')
  async updateOrderStatus(
    @Param('id') id: string,
    @Body() body: { status: string; riderId?: string },
  ) {
    const supabase = this.supabaseService.getClient();
    const updatePayload: any = { status: body.status };
    if (body.riderId) updatePayload.rider_id = body.riderId;

    const { data, error } = await supabase
      .from('orders')
      .update(updatePayload)
      .eq('id', id)
      .select('*')
      .single();

    if (error) {
      throw new BadRequestException(`Failed to update status: ${error.message}`);
    }
    return data;
  }

  @Get('available-for-rider/:riderId')
  async getAvailableOrdersForRider(
    @Param('riderId') riderId: string,
    @Query('lat') lat: string,
    @Query('lng') lng: string,
  ) {
    if (!lat || !lng) {
      throw new BadRequestException('Rider location is required.');
    }

    const supabase = this.supabaseService.getClient();
    const { data: orders, error } = await supabase
      .from('orders')
      .select('*, restaurants(name, lat, lng)')
      .eq('status', 'pending')
      .is('rider_id', null);

    if (error) {
      throw new BadRequestException(`Failed to fetch orders: ${error.message}`);
    }

    const riderLat = parseFloat(lat);
    const riderLng = parseFloat(lng);

    const availableOrders = orders.filter(order => {
      const rest = order.restaurants as any;
      if (!rest.lat || !rest.lng) return true; // Include if location not specified for now
      const dist = calculateDistance(riderLat, riderLng, parseFloat(rest.lat), parseFloat(rest.lng));
      return dist <= 2; // Restaurant must be within 2km of rider
    });

    return availableOrders;
  }
}
