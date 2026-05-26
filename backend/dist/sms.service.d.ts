import { ConfigService } from '@nestjs/config';
export declare class SmsService {
    private configService;
    private readonly logger;
    constructor(configService: ConfigService);
    sendOtp(phone: string, otp: string): Promise<boolean>;
}
