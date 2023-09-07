import { EmailSender } from "../domain/email-sender";

export class FakeEmailSender implements EmailSender{
    async send(email: string, text: string): Promise<void> {
        console.log(`email send simulation to th eemail: ${email} with the text: ${text}`);
    }}