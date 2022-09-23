import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { MongoDBGenericRepository } from '../../context/mongodb/mongodb.generic.repository';
import type { UserDocument } from './schema/user.schema';
import { User } from './schema/user.schema';

@Injectable()
export class UserRepository extends MongoDBGenericRepository<UserDocument> {
  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
