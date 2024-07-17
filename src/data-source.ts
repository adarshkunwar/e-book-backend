import "reflect-metadata"
import { DataSource } from "typeorm"
import { Author } from "./entity/Author"
import { Book } from "./entity/Book"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Book, Author],
    migrations: [],
    subscribers: [],
})
