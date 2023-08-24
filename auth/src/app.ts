import express, { Request,Response }  from "express";
import { UserRouter } from './router'

export const app = express()
app.use(express.json())
app.use('/api/v1/', UserRouter)

app.get('/hc', (req:Request, res:Response)=>{
    res.status(200).send("Server up and Running")
})



