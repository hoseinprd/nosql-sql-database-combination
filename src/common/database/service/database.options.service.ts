import { Injectable } from '@nestjs/common';
import type {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class DatabaseOptionsService implements MongooseOptionsFactory {
  private readonly host: string;
  private readonly port: string;
  private readonly database: string;
  private readonly debug: boolean;
  private readonly isDev: boolean;

  constructor() {
    this.isDev = true;
    this.host = process.env['DB_HOST']!;
    this.port = process.env['DB_PORT']!;
    this.database = process.env['DB_NAME']!;
    this.debug = true;
  }

  createMongooseOptions(): MongooseModuleOptions {
    const uri = `mongodb://${this.host}:${this.port}/${this.database}`;

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
