import { Injectable } from '@nestjs/common';
import type {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class DatabaseOptionsService implements MongooseOptionsFactory {
  private readonly host: string;
  private readonly database: string;
  private readonly debug: boolean;
  private readonly isDev: boolean;

  constructor() {
    this.isDev = true;
    this.host = process.env['DB_HOST']!;
    this.database = 'db_name';
    this.debug = true;
  }

  createMongooseOptions(): MongooseModuleOptions {
    const uri = `${this.host}/${this.database}`;

    if (this.isDev) {
      mongoose.set('debug', this.debug);
    }

    const mongooseOptions: MongooseModuleOptions = {
      uri,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    };

    return mongooseOptions;
  }
}
