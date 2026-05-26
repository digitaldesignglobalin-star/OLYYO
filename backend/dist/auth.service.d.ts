import { SupabaseService } from './supabase.service';
import { SmsService } from './sms.service';
export declare class AuthService {
    private supabaseService;
    private smsService;
    private readonly logger;
    constructor(supabaseService: SupabaseService, smsService: SmsService);
    sendOtp(phone: string): Promise<{
        success: boolean;
        message: string;
    }>;
    verifyOtp(phone: string, code: string): Promise<{
        success: boolean;
        token: string;
        user: any;
    }>;
}
