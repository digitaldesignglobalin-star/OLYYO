import { SupabaseService } from './supabase.service';
export declare class OrderController {
    private readonly supabaseService;
    constructor(supabaseService: SupabaseService);
    placeOrder(body: {
        userId: string;
        restaurantId: number;
        totalAmount: number;
        address: string;
        paymentMethod: string;
        items: Array<{
            menu_item_id: number;
            quantity: number;
            price: number;
        }>;
    }): Promise<{
        success: boolean;
        order: any;
    }>;
    getAllOrders(status?: string): Promise<any[]>;
    getActiveOrder(userId: string): Promise<any>;
    getUserOrders(userId: string): Promise<any[]>;
    getOrderById(id: string): Promise<any>;
    updateOrderStatus(id: string, body: {
        status: string;
    }): Promise<any>;
}
