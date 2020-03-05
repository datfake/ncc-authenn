import { Entity, Column, PrimaryGeneratedColumn,BeforeInsert,OneToMany } from 'typeorm';
import * as crypto from 'crypto';
import { notification } from 'src/notification/notification.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: ''})
  name: string;

  @Column({default: ''})
  avatar: string;

  @Column()
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @Column()
  password: string;

  @OneToMany(type => notification, Notification => Notification.user)
  notifications: notification[];
}