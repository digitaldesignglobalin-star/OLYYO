"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("./supabase.service");
const utils_1 = require("./utils");
let OrderController = class OrderController {
    supabaseService;
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
    }
    async placeOrder(body) {
        const { userId, restaurantId, totalAmount, address, paymentMethod, items } = body;
        if (!userId || !restaurantId || !totalAmount || !address || !paymentMethod || !items || items.length === 0) {
            throw new common_1.BadRequestException('Missing order details.');
        }
        const supabase = this.supabaseService.getClient();
        const orderId = `OLY-${Math.floor(100000 + Math.random() * 900000)}`;
        const { data: settings } = await supabase.from('platform_settings').select('*').single();
        let kitchen_earnings = 0;
        let rider_earnings = 0;
        let super_admin_commission = 0;
        if (settings) {
            kitchen_earnings = totalAmount * (settings.kitchen_commission_percent / 100);
            rider_earnings = totalAmount * (settings.rider_commission_percent / 100);
            super_admin_commission = totalAmount * (settings.super_admin_commission_percent / 100);
        }
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
            throw new common_1.BadRequestException(`Failed to create order: ${orderError.message}`);
        }
        const orderItemsToInsert = items.map((item) => ({
            order_id: orderId,
            menu_item_id: item.menu_item_id,
            quantity: item.quantity,
            price: item.price,
        }));
        const { error: itemsError } = await supabase.from('order_items').insert(orderItemsToInsert);
        if (itemsError) {
            await supabase.from('orders').delete().eq('id', orderId);
            throw new common_1.BadRequestException(`Failed to save order items: ${itemsError.message}`);
        }
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
    async getAllOrders(status) {
        const supabase = this.supabaseService.getClient();
        let query = supabase.from('orders').select('*, users(phone, name), restaurants(name)');
        if (status) {
            query = query.eq('status', status);
        }
        const { data, error } = await query.order('created_at', { ascending: false });
        if (error) {
            throw new common_1.BadRequestException(`Failed to fetch orders: ${error.message}`);
        }
        return data;
    }
    async getActiveOrder(userId) {
        const supabase = this.supabaseService.getClient();
        const { data, error } = await supabase
            .from('orders')
            .select('*, restaurants(name)')
            .eq('user_id', userId)
            .not('status', 'in', '("delivered","cancelled")')
            .order('created_at', { ascending: false });
        if (error) {
            throw new common_1.BadRequestException(`Failed to fetch active order: ${error.message}`);
        }
        return data && data.length > 0 ? data[0] : null;
    }
    async getUserOrders(userId) {
        const supabase = this.supabaseService.getClient();
        const { data, error } = await supabase
            .from('orders')
            .select('*, restaurants(name)')
            .eq('user_id', userId)
            .order('created_at', { ascending: false });
        if (error) {
            throw new common_1.BadRequestException(`Failed to fetch user orders: ${error.message}`);
        }
        return data;
    }
    async getOrderById(id) {
        const supabase = this.supabaseService.getClient();
        const { data: order, error: orderError } = await supabase
            .from('orders')
            .select('*, restaurants(name)')
            .eq('id', id)
            .single();
        if (orderError || !order) {
            throw new common_1.BadRequestException('Order not found.');
        }
        const { data: items, error: itemsError } = await supabase
            .from('order_items')
            .select('*, menu_items(name)')
            .eq('order_id', id);
        if (itemsError) {
            throw new common_1.BadRequestException('Failed to fetch order items.');
        }
        return {
            ...order,
            items,
        };
    }
    async updateOrderStatus(id, body) {
        const supabase = this.supabaseService.getClient();
        const updatePayload = { status: body.status };
        if (body.riderId)
            updatePayload.rider_id = body.riderId;
        const { data, error } = await supabase
            .from('orders')
            .update(updatePayload)
            .eq('id', id)
            .select('*')
            .single();
        if (error) {
            throw new common_1.BadRequestException(`Failed to update status: ${error.message}`);
        }
        return data;
    }
    async getAvailableOrdersForRider(riderId, lat, lng) {
        if (!lat || !lng) {
            throw new common_1.BadRequestException('Rider location is required.');
        }
        const supabase = this.supabaseService.getClient();
        const { data: orders, error } = await supabase
            .from('orders')
            .select('*, restaurants(name, lat, lng)')
            .eq('status', 'pending')
            .is('rider_id', null);
        if (error) {
            throw new common_1.BadRequestException(`Failed to fetch orders: ${error.message}`);
        }
        const riderLat = parseFloat(lat);
        const riderLng = parseFloat(lng);
        const availableOrders = orders.filter(order => {
            const rest = order.restaurants;
            if (!rest.lat || !rest.lng)
                return true;
            const dist = (0, utils_1.calculateDistance)(riderLat, riderLng, parseFloat(rest.lat), parseFloat(rest.lng));
            return dist <= 2;
        });
        return availableOrders;
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "placeOrder", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAllOrders", null);
__decorate([
    (0, common_1.Get)('active/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getActiveOrder", null);
__decorate([
    (0, common_1.Get)('user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getUserOrders", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderById", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderStatus", null);
__decorate([
    (0, common_1.Get)('available-for-rider/:riderId'),
    __param(0, (0, common_1.Param)('riderId')),
    __param(1, (0, common_1.Query)('lat')),
    __param(2, (0, common_1.Query)('lng')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getAvailableOrdersForRider", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], OrderController);
//# sourceMappingURL=order.controller.js.map