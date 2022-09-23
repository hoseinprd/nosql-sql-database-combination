import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import type { Document } from 'mongoose';

@Schema()
export class User {
  @Prop()
  name?: string;
}

export type UserDocument = Document & User;
export const UserSchema = SchemaFactory.createForClass(User);
