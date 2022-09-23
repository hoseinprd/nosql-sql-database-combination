import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import type { EnvironmentVariables } from './configuration/EnvironmentVariables';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService<EnvironmentVariables>);

  // Null-safety is handled in Service
  const port = configService.get('PORT');

  await app.listen(port);
}

void bootstrap();
