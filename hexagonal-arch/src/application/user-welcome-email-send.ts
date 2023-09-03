import { UserRepository } from "../domain/UserRepository";
import { EmailSender } from "../domain/email-sender";

export class WelcomeEmailSend{
    constructor(
            private readonly userRepository: UserRepository,
            private readonly emailSender : EmailSender
        ){}
    async run(userId:string){
        console.log(userId);
        
        const user = await this.userRepository.getById(userId)

        if(!user){
            throw new Error(" User is not found " + userId)
        }

        await this.emailSender.send(user.email, " Welcome to our application ")
    }
}