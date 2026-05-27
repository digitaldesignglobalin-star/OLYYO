"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supabase_service_1 = require("./supabase.service");
constructor(private, readonly, supabaseService, supabase_service_1.SupabaseService);
{ }
getRestaurants(, vegOnly ?  : string, , search ?  : string, , lat ?  : string, , lng ?  : string);
{
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
            if (!r.lat || !r.lng)
                return true;
            const dist = (0, utils_1.calculateDistance)(userLat, userLng, parseFloat(r.lat), parseFloat(r.lng));
            return dist <= 5;
        });
    }
    return data;
}
getRestaurantById(, id, string);
{
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
getRestaurantMenu(, id, string);
{
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
//# sourceMappingURL=restaurant.controller.js.map