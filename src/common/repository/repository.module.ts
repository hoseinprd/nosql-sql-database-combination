import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserRepository } from './models';
import { User, UserSchema } from './models/users/schema/user.schema';
import { RepositoryService } from './services/repository.service';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [RepositoryService, UserRepository],
  exports: [RepositoryService],
})
export class RepositoryModule {}
