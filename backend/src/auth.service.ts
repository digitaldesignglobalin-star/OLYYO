import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { SmsService } from './sms.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private supabaseService: SupabaseService,
    private smsService: SmsService,
  ) {}

  async sendOtp(phone: string): Promise<{ success: boolean; message: string }> {
    // Validate phone number format (e.g. 10 digits Indian numbers or general validation)
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length < 10) {
      throw new BadRequestException('Invalid phone number. Must be at least 10 digits.');
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiry

    const supabase = this.supabaseService.getClient();

    // Store or upsert OTP verification record
    const { error } = await supabase.from('otp_verifications').upsert(
      {
        phone: cleanedPhone,
        otp_code: otp,
        expires_at: expiresAt.toISOString(),
        created_at: new Date().toISOString(),
      },
      { onConflict: 'phone' },
    );

    if (error) {
      this.logger.error(`Database error saving OTP: ${error.message}`);
      throw new BadRequestException('Could not generate OTP. Please try again.');
    }

    // Send OTP via SMS
    const smsSent = await this.smsService.sendOtp(cleanedPhone, otp);
    if (!smsSent) {
      throw new BadRequestException('Failed to send OTP SMS. Please try again.');
    }

    return {
      success: true,
      message: 'OTP sent successfully.',
    };
  }

  async verifyOtp(phone: string, code: string): Promise<{ success: boolean; token: string; user: any }> {
    const cleanedPhone = phone.replace(/\D/g, '');
    const supabase = this.supabaseService.getClient();

    // 1. Fetch OTP record
    const { data: otpData, error: otpError } = await supabase
      .from('otp_verifications')
      .select('*')
      .eq('phone', cleanedPhone)
      .single();

    if (otpError || !otpData) {
      throw new BadRequestException('OTP request not found. Please request a new OTP.');
    }

    // 2. Check expiry
    const now = new Date();
    const expiresAt = new Date(otpData.expires_at);
    if (now > expiresAt) {
      // Clean up expired OTP
      await supabase.from('otp_verifications').delete().eq('phone', cleanedPhone);
      throw new BadRequestException('OTP has expired. Please request a new one.');
    }

    // 3. Match code
    if (otpData.otp_code !== code) {
      throw new BadRequestException('Incorrect OTP code.');
    }

    // 4. Delete OTP code so it cannot be reused
    await supabase.from('otp_verifications').delete().eq('phone', cleanedPhone);

    // 5. Fetch or create user
    let { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('phone', cleanedPhone)
      .single();

    if (userError || !userData) {
      // Create user if not exists
      const { data: newUser, error: createError } = await supabase
        .from('users')
        .insert({
          phone: cleanedPhone,
          role: 'customer', // Default role
          name: `User ${cleanedPhone.substring(cleanedPhone.length - 4)}`,
        })
        .select('*')
        .single();

      if (createError) {
        this.logger.error(`Failed to register user: ${createError.message}`);
        throw new BadRequestException('Could not register user. Please try again.');
      }
      userData = newUser;
    }

    // 6. Generate simplified token (for illustration, a custom JWT or session string)
    // In production, we'd sign a real JWT. Here we construct a token string.
    const token = `olyyo_token_${Buffer.from(JSON.stringify({ id: userData.id, role: userData.role, phone: userData.phone })).toString('base64')}`;

    return {
      success: true,
      token,
      user: userData,
    };
  }
}
