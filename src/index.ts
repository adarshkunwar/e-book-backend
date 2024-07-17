import "reflect-metadata";
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import * as express from 'express'
// import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    const app = express()

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
