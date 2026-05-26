import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupabaseService } from './supabase.service';
import { SmsService } from './sms.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RestaurantController } from './restaurant.controller';
import { OrderController } from './order.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController, AuthController, RestaurantController, OrderController],
  providers: [AppService, SupabaseService, SmsService, AuthService],
})
export class AppModule {}

