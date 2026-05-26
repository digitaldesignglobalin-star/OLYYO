import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService implements OnModuleInit {
  private readonly logger = new Logger(SupabaseService.name);
  private supabaseClient: SupabaseClient;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');

    if (!supabaseUrl || !supabaseKey) {
      this.logger.warn(
        'Supabase URL or Key is missing. Database operations will fail until environment variables are configured.',
      );
      return;
    }

    this.supabaseClient = createClient(supabaseUrl, supabaseKey);
    this.logger.log('Supabase client initialized successfully.');
  }

  getClient(): SupabaseClient {
    if (!this.supabaseClient) {
      throw new Error('Supabase client is not initialized yet. Verify your environment variables.');
    }
    return this.supabaseClient;
  }
}
