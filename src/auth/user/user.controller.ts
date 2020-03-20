import { User } from "../user.entity";
import { UserService } from "./user.service";
import { Controller, Get } from "@nestjs/common";

@Controller('user')
export class UserController {
    constructor(private UserService: UserService){}

    @Get()
    index(): Promise<User[]> {
      console.log("api hit");
      return this.UserService.findAll();

    } 

}