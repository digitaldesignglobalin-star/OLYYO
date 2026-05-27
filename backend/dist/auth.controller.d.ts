import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    sendOtp(body: {
        phone: string;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    verifyOtp(body: {
        phone: string;
        code: string;
        role?: string;
    }): Promise<{
        success: boolean;
        token: string;
        user: any;
    }>;
}
