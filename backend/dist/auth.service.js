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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("./supabase.service");
const sms_service_1 = require("./sms.service");
let AuthService = AuthService_1 = class AuthService {
    supabaseService;
    smsService;
    logger = new common_1.Logger(AuthService_1.name);
    constructor(supabaseService, smsService) {
        this.supabaseService = supabaseService;
        this.smsService = smsService;
    }
    async sendOtp(phone) {
        const cleanedPhone = phone.replace(/\D/g, '');
        if (cleanedPhone.length < 10) {
            throw new common_1.BadRequestException('Invalid phone number. Must be at least 10 digits.');
        }
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
        const supabase = this.supabaseService.getClient();
        const { error } = await supabase.from('otp_verifications').upsert({
            phone: cleanedPhone,
            otp_code: otp,
            expires_at: expiresAt.toISOString(),
            created_at: new Date().toISOString(),
        }, { onConflict: 'phone' });
        if (error) {
            this.logger.error(`Database error saving OTP: ${error.message}`);
            throw new common_1.BadRequestException('Could not generate OTP. Please try again.');
        }
        const smsSent = await this.smsService.sendOtp(cleanedPhone, otp);
        if (!smsSent) {
            throw new common_1.BadRequestException('Failed to send OTP SMS. Please try again.');
        }
        return {
            success: true,
            message: 'OTP sent successfully.',
        };
    }
    async verifyOtp(phone, code) {
        const cleanedPhone = phone.replace(/\D/g, '');
        const supabase = this.supabaseService.getClient();
        const { data: otpData, error: otpError } = await supabase
            .from('otp_verifications')
            .select('*')
            .eq('phone', cleanedPhone)
            .single();
        if (otpError || !otpData) {
            throw new common_1.BadRequestException('OTP request not found. Please request a new OTP.');
        }
        const now = new Date();
        const expiresAt = new Date(otpData.expires_at);
        if (now > expiresAt) {
            await supabase.from('otp_verifications').delete().eq('phone', cleanedPhone);
            throw new common_1.BadRequestException('OTP has expired. Please request a new one.');
        }
        if (otpData.otp_code !== code) {
            throw new common_1.BadRequestException('Incorrect OTP code.');
        }
        await supabase.from('otp_verifications').delete().eq('phone', cleanedPhone);
        let { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('phone', cleanedPhone)
            .single();
        if (userError || !userData) {
            const { data: newUser, error: createError } = await supabase
                .from('users')
                .insert({
                phone: cleanedPhone,
                role: 'customer',
                name: `User ${cleanedPhone.substring(cleanedPhone.length - 4)}`,
            })
                .select('*')
                .single();
            if (createError) {
                this.logger.error(`Failed to register user: ${createError.message}`);
                throw new common_1.BadRequestException('Could not register user. Please try again.');
            }
            userData = newUser;
        }
        const token = `olyyo_token_${Buffer.from(JSON.stringify({ id: userData.id, role: userData.role, phone: userData.phone })).toString('base64')}`;
        return {
            success: true,
            token,
            user: userData,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService,
        sms_service_1.SmsService])
], AuthService);
//# sourceMappingURL=auth.service.js.map