import { SupabaseService } from './supabase.service';
export declare class RestaurantController {
    private readonly supabaseService;
    constructor(supabaseService: SupabaseService);
    getRestaurants(vegOnly?: string, search?: string): Promise<any[]>;
    getRestaurantById(id: string): Promise<any>;
    getRestaurantMenu(id: string): Promise<any[]>;
}
