import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    author: string;

    // TODO: create a many-to-many relationship
    @Column({ type: 'simple-array' })
    genre: string[];

    @Column()
    publishedDate: Date;

    @Column()
    lastUpdated: Date;

    // TODO: create a many-to-many relationship
    @Column()
    data: string;
    // chapters: Chapter[]

}
