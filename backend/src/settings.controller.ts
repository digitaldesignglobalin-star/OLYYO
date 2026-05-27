import { Controller, Get, Patch, Body, BadRequestException } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get()
  async getSettings() {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase
      .from('platform_settings')
      .select('*')
      .single();

    if (error) {
      throw new BadRequestException(`Failed to fetch settings: ${error.message}`);
    }
    return data;
  }

  @Patch()
  async updateSettings(
    @Body()
    body: {
      rider_commission_percent?: number;
      super_admin_commission_percent?: number;
      kitchen_commission_percent?: number;
    },
  ) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase
      .from('platform_settings')
      .update({
        ...body,
        updated_at: new Date().toISOString(),
      })
      .eq('id', 1) // Assuming single row with id 1
      .select('*')
      .single();

    if (error) {
      throw new BadRequestException(`Failed to update settings: ${error.message}`);
    }
    return data;
  }
}
