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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var SmsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
let SmsService = SmsService_1 = class SmsService {
    configService;
    logger = new common_1.Logger(SmsService_1.name);
    constructor(configService) {
        this.configService = configService;
    }
    async sendOtp(phone, otp) {
        const apiKey = this.configService.get('FAST2SMS_API_KEY');
        if (!apiKey || apiKey === 'your_fast2sms_api_key' || apiKey === '') {
            this.logger.log(`[MOCK SMS] Sending OTP ${otp} to ${phone} (Fast2SMS key is missing/mocked)`);
            return true;
        }
        try {
            this.logger.log(`Sending OTP via Fast2SMS to ${phone}...`);
            const response = await axios_1.default.get('https://www.fast2sms.com/dev/bulkV2', {
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
            }
            else {
                this.logger.error(`Fast2SMS failed to send SMS: ${JSON.stringify(response.data)}`);
                return false;
            }
        }
        catch (error) {
            this.logger.error(`Error occurred while calling Fast2SMS: ${error.message}`);
            if (error.response) {
                this.logger.error(`Fast2SMS response data: ${JSON.stringify(error.response.data)}`);
            }
            return false;
        }
    }
};
exports.SmsService = SmsService;
exports.SmsService = SmsService = SmsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SmsService);
//# sourceMappingURL=sms.service.js.map