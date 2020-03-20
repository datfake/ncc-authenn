
import { Controller, Post, Body, UseGuards, Get } from  '@nestjs/common';
import { AuthService } from  './auth.service';
import { User } from  '../user.entity';
import { AuthGuard } from '@nestjs/passport';
import {UserService} from '../user/user.service'

@Controller('auth')
export  class  AuthController {
    constructor(private  readonly  authService:  AuthService,
      private UserService: UserService) {}

    @Post('login')
    async login(@Body() user: User): Promise<any> {
      return this.authService.login(user);
    }  

    @Post('register')
    async register(@Body() user: User): Promise<any> {
      return this.authService.register(user);
    }  

    @Get()
    index(): Promise<User[]> {
      console.log("get all user");
      return this.UserService.findAll();

    } 

}