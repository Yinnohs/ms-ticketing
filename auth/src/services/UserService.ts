import { IUser, User } from "../models";
import { CreateUserDTO } from "../types";

class UserService {
    constructor(){}

    static async createUser(userData : CreateUserDTO):Promise<IUser>{
        return await User.create(User.build(userData))
    }

    static async findUserByemail(email:string):Promise<IUser | null>{
        return await User.findOne({email:email})
    }  

    static async checkEmailIsTaken(email:string):Promise<boolean>{
        const createdUser = await User.findOne({email: email})
        
        if(createdUser) {
            return true
        }

        return false
        
    }
}

export { UserService };
