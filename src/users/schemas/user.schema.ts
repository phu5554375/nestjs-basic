
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required: true})
  email: string;

  @Prop({required: true})
  password: string;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  adress: string;

  @Prop()
  createAt: Date;
  
  @Prop()
  updateAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
