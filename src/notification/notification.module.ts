import { Module } from '@nestjs/common';
import { notificationService } from './notification.service';
import { notificationController } from './notification.controller'; // ye 3 khud se likhny
import { TypeOrmModule } from '@nestjs/typeorm';
import { notification } from './notification.entity';


@Module({
  providers: [notificationService],
  controllers: [notificationController] ,//add it
  imports: [

    TypeOrmModule.forFeature([notification]), //add it, forFeature() method to define which repositories are registered in the current scope. 
  ],                                      // now typeorm will recognize the notification entity
})
export class notificationModule {}
