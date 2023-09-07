import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { json as bodyParserJson } from 'body-parser'
import { log } from 'console'
import { userRouter } from './infrastructure/user/User.router'

const SERVER_PORT = parseInt(process.env.SERVER_PORT || "5010", 10)

const app = express();

app.use(helmet())
app.use(cors())
app.use(morgan("common"))
app.use(bodyParserJson())

app.use('/health', (req:Request, res:Response)=>{
    return res.status(200).send("server running 200 ok")
})

app.use('/api/v1/users/', userRouter)



export const startApplication =  async ()=>{
    app.listen(SERVER_PORT, ()=>{
        console.log("SERVER STARTED AT: http://localhost:", SERVER_PORT);
    })
}