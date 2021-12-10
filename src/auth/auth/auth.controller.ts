import { Controller, Post, Body, Put, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
//import { UpdateUserDto } from './DTO/update-user.dto';


@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() req){
    return req.user;
  }
/*  @Put()
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
  ){
    return this.usersService.updateUser(updateUserDto);
  }*/
  
}