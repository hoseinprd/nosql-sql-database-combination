import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DatabaseOptionsService } from './service/database.options.service';

@Module({
  providers: [DatabaseOptionsService],
  exports: [DatabaseOptionsService],
  imports: [
    MongooseModule.forRootAsync({
      inject: [DatabaseOptionsService],
      imports: [DatabaseModule],
      useFactory: (databaseOptionsService: DatabaseOptionsService) =>
        databaseOptionsService.createMongooseOptions(),
    }),
  ],
})
export class DatabaseModule {}
