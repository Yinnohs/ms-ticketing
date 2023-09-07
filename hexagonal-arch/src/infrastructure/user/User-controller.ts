import { Request, Response } from "express";
import { WelcomeEmailSend } from "../../application";

export class UserController{
    constructor(private readonly welcomeEmailSender: WelcomeEmailSend ){}

    async run(req: Request, res:Response){

        const userId = req.params.userId 
        await this.welcomeEmailSender.run(userId)
        res.status(200).send("user created")
    }
}