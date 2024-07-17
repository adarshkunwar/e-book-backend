import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Author {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    dateOfBirth: Date;

    @Column()
    email: string;

    @Column()
    phone: string;


    // TODO: change this to a one-to-many relationship
    @Column()
    book: string[]
}
