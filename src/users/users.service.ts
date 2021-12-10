import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './DTO/create-user.dto';
//import { UpdateUserDto } from './DTO/update-user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UsersService {
  users: any;
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    
  ) {}
  
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    if (createUserDto.password !== createUserDto.passwordConfirmation) {
      throw new UnprocessableEntityException('As senhas não conferem');
    } else {
      const createUser = this.userRepository.create(createUserDto);
      return this.userRepository.save(createUser);

    }
  }
  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({email: email});
  }

  async findUser(email: string): Promise<User>{
    return await this.userRepository.findOne({where: {email}})
  }
  
  async updateUser(body: any): Promise<UpdateResult>{
    const user = await this.userRepository.findOne({where: {email: body.email}})
    if (body.password){
      body.password = await bcrypt.hash(body.password,12)
    }
    return await this.userRepository.update(user.id, body)
  }

 /* async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    console.log(updateUserDto);
    const createUser = this.userRepository.update(this.updateUser);
    return this.userRepository.update(this.updateUser);
  }
*/
}