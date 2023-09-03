import { randomUUID } from "crypto";
import { User } from "../../domain";
import { UserRepository } from "../../domain/UserRepository";

export class InMemoryUserRepository implements UserRepository{
    private users: User[] = [{
        userId: "aa84b648-b9c2-4a5e-abc2-ef3578d047df",
        email: "ihaveemail@email.com"
    },
    {
        userId: "aa84b648-b9c2-4a5e-abc2-ef3578d047dd",
        email: "a@a.com"
    }
]
    async createUser(email: string): Promise<void> {
        if(!email.trim()){
            throw new Error('Email was not provided')
        }
        const userId = randomUUID()
        const user = new User(userId, email)

        this.users.push(user)
    }
    async getById(userId: string): Promise<User | null> {
        const user = this.users.find((user)=> user.userId ===  userId)

        if(!user){
            return null
        } 
        
        return user
    }
    
}