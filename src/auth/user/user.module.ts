import { User } from "../user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserService } from "./user.service";
import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";


@Module({
    providers: [UserService],
    controllers: [UserController] ,//add it
    imports: [
  
      TypeOrmModule.forFeature([User]), //add it, forFeature() method to define which repositories are registered in the current scope. 
    ],                                      // now typeorm will recognize the notification entity
  })
export class UserModule { }