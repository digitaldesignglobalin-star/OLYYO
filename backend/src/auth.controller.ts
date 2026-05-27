import { Controller, Post, Body, HttpCode, HttpStatus, Get, Patch, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('send-otp')
  @HttpCode(HttpStatus.OK)
  async sendOtp(@Body() body: { phone: string }) {
    return this.authService.sendOtp(body.phone);
  }

  @Post('verify-otp')
  @HttpCode(HttpStatus.OK)
  async verifyOtp(@Body() body: { phone: string; code: string; role?: string }) {
    return this.authService.verifyOtp(body.phone, body.code, body.role);
  }

  @Get('pending')
  async getPendingApprovals() {
    return this.authService.getPendingUsers();
  }

  @Patch('approve/:id')
  async approveUser(@Param('id') id: string) {
    return this.authService.approveUser(id);
  }
}
