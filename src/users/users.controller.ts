import { Controller, Post, Body, Put, Get, UseGuards, Request, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './DTO/update-user.dto';
import { UsersService } from './users.service';


@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('createUsers')
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ){
  	return this.usersService.createUser(createUserDto);
  }
  
  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req){
    return req.user;
  }

  @Get('findUser')
  async findLogin(@Body() req){
    return this.usersService.findUser(req.email)
  }

  @Put('updateUser')
  async updateUser(@Body() req){
    return this.usersService.updateUser(req)
  }
/*  @Put()
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
  ){
    return this.usersService.updateUser(updateUserDto);
  }*/
  
}