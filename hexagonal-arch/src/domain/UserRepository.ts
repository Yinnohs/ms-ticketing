import { User } from "./User";


export interface UserRepository{
    getById(userId:string): Promise< User | null>
    createUser(email:string): Promise<void>
}