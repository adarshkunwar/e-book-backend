import "reflect-metadata";
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import * as express from 'express'

import BooksRoutes from "./routes/Books.routes"

AppDataSource.initialize().then(async () => {

    const app = express()

    app.use("/books", BooksRoutes)

    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to the API"
        })
    })

    app.listen(8080, () => {
        console.log("Server started on http://localhost:8080")
    })
}).catch(error => console.log(error))
