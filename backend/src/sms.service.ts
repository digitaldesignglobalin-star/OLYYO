import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class SmsService {
  private readonly logger = new Logger(SmsService.name);

  constructor(private configService: ConfigService) {}

  async sendOtp(phone: string, otp: string): Promise<boolean> {
    const apiKey = this.configService.get<string>('FAST2SMS_API_KEY');

    if (!apiKey || apiKey === 'your_fast2sms_api_key' || apiKey === '') {
      this.logger.log(`[MOCK SMS] Sending OTP ${otp} to ${phone} (Fast2SMS key is missing/mocked)`);
      return true;
    }

    try {
      this.logger.log(`Sending OTP via Fast2SMS to ${phone}...`);
      // Fast2SMS bulkV2 OTP route details:
      // route=otp, variables_values=otp_code, numbers=phone_number
      const response = await axios.get('https://www.fast2sms.com/dev/bulkV2', {
        params: {
          authorization: apiKey,
          route: 'otp',
          variables_values: otp,
          numbers: phone,
        },
        headers: {
          'cache-control': 'no-cache',
        },
      });

      if (response.data && response.data.return === true) {
        this.logger.log(`OTP successfully sent to ${phone}`);
        return true;
      } else {
        this.logger.error(`Fast2SMS failed to send SMS: ${JSON.stringify(response.data)}`);
        return false;
      }
    } catch (error) {
      this.logger.error(`Error occurred while calling Fast2SMS: ${error.message}`);
      if (error.response) {
        this.logger.error(`Fast2SMS response data: ${JSON.stringify(error.response.data)}`);
      }
      return false;
    }
  }
}
