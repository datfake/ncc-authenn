import { Controller, UseGuards } from '@nestjs/common';
import { notification } from './notification.entity'; //ye 3 khud se
import { notificationService } from './notification.service';
import { Post,Put, Delete, Body, Param, Get } from  '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('notification')
@UseGuards(AuthGuard('jwt'))
export class notificationController {
    constructor(private notificationService: notificationService){}

    @Get()
    index(): Promise<notification[]> {
      console.log("api hit");
      return this.notificationService.findAll();

    } 

    @Post('create')
    async create(@Body() notificationData: notification): Promise<any> {
      return this.notificationService.create(notificationData);//We use the @Body decorator to extract and inject the body of the POST request in the create() method. 
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> { //We extract and inject the id using the @Param() decorator and we call the delete() method of notificationsService.
      return this.notificationService.delete(id);
    }  

    @Put(':id/update')
    async update(@Param('id') id, @Body() notificationData: notification): Promise<any> {
        notificationData.id = Number(id);
        console.log('Update #' + notificationData.id)
        return this.notificationService.update(notificationData);
    }  

}

