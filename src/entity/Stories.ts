import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Genre } from "./Genre";

export class Stories {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    cover_image: string;

    @ManyToOne(() => Genre, genre => genre.id)
    genre: Genre
}


