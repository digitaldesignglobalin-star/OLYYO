import { Controller, Get, Param, Query } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { calculateDistance } from './utils';

@Controller('restaurants')
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get()
  async getRestaurants(
    @Query('vegOnly') vegOnly?: string,
    @Query('search') search?: string,
    @Query('lat') lat?: string,
    @Query('lng') lng?: string,
  ) {
    const supabase = this.supabaseService.getClient();
    let query = supabase.from('restaurants').select('*');

    if (vegOnly === 'true') {
      query = query.eq('is_veg', true);
    }

    if (search) {
      query = query.ilike('name', `%${search}%`);
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(`Failed to fetch restaurants: ${error.message}`);
    }

    if (lat && lng && data) {
      const userLat = parseFloat(lat);
      const userLng = parseFloat(lng);
      
      return data.filter(r => {
        if (!r.lat || !r.lng) return true; // Show restaurants without coordinates for backward compatibility
        const dist = calculateDistance(userLat, userLng, parseFloat(r.lat), parseFloat(r.lng));
        return dist <= 5;
      });
    }

    return data;
  }

  @Get(':id')
  async getRestaurantById(@Param('id') id: string) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('id', parseInt(id))
      .single();

    if (error) {
      throw new Error(`Failed to fetch restaurant: ${error.message}`);
    }
    return data;
  }

  @Get(':id/menu')
  async getRestaurantMenu(@Param('id') id: string) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('restaurant_id', parseInt(id));

    if (error) {
      throw new Error(`Failed to fetch menu items: ${error.message}`);
    }
    return data;
  }
}
