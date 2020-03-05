import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    
}