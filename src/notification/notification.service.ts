import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'; // ye 4 khud add 
import { InjectRepository } from '@nestjs/typeorm';
import { notification } from './notification.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class notificationService {
    constructor(
        @InjectRepository(notification)
        private notificationRepository: Repository<notification>,
    ) { }

    async  findAll(): Promise<notification[]> {
        return await this.notificationRepository.find();
    }

    async  create(notification: notification): Promise<notification> {
        return await this.notificationRepository.save(notification);
    }

    async update(notification: notification): Promise<UpdateResult> {
        return await this.notificationRepository.update(notification.id, notification);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.notificationRepository.delete(id);
    }








}
