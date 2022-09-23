import type { Document, FilterQuery, Model, ProjectionType } from 'mongoose';

import type { GenericRepository } from '../../interface/generic.repository.interface';

export abstract class MongoDBGenericRepository<T extends Document>
  implements GenericRepository<T>
{
  constructor(protected readonly entityModel: Model<T>) {}

  findOne(
    query: FilterQuery<T>,
    projection?: ProjectionType<T>,
  ): Promise<T | null> {
    return this.entityModel.findOne(query, projection).exec();
  }

  findAll(): Promise<T[]> {
    return this.entityModel.find().exec();
  }
}
