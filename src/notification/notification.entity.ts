import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/auth/user.entity';

@Entity()
export class notification {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    type: string;

    @ManyToOne(type => User, user => user.notifications)
    user: User;
}