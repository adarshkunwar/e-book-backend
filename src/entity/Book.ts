import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./Author";

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    author: Author[];

    // TODO: create a many-to-many relationship
    @Column()
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
