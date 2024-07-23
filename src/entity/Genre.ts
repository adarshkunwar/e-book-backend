import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Stories } from "./Stories";

export class Genre {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    cover_image: string;

    @OneToMany(() => Stories, stories => stories.id)
    stories: Stories[];

}
