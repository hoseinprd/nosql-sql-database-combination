import { Module } from '@nestjs/common';

import { ConfigurationModule } from './common/configuration/configuration.module';
import { DatabaseModule } from './common/database/database.module';
import { RepositoryModule } from './common/repository/repository.module';

@Module({
  imports: [DatabaseModule, ConfigurationModule, RepositoryModule],
})
export class AppModule {}
