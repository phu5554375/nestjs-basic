import { Injectable, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import {genSaltSync, hashSync} from 'bcryptjs';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) 
    private userModel: Model<User>
  ) {}

  gethashPassword = (password : string) => {
  const salt = genSaltSync(10);
  const hash = hashSync(password, salt);
  return hash;
  }
 async create(createUserDto: CreateUserDto){
    // return createUserDto;
  // async create(email: string, password: string, name: string) {

  const hashPassword = this.gethashPassword(createUserDto.password);
  
  let user =  await this.userModel.create({
      email: createUserDto.email, 
      password: hashPassword, 
      name: createUserDto.name
    })
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    if(mongoose.Types.ObjectId.isValid(id))
    return "not found user";
    return this.userModel.findOne({
      _id: id
    })
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
