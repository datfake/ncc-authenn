import { User } from "../user.entity";
import { UserService } from "./user.service";
import { Controller, Get } from "@nestjs/common";

@Controller('all')
export class UserController {
    constructor(private UserService: UserService){}

    @Get()
    index(): Promise<User[]> {
      console.log("get all user");
      return this.UserService.findAll();

    } 

}