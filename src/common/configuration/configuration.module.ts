import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: false,
      isGlobal: true,
    }),
  ],
})
export class ConfigurationModule {}
