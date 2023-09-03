import mongoose from "mongoose"

export const connecWithMongoDb = async ()=> {
    try {
        await mongoose.connect('mongodb://auth-mongo.service:27017/auth')
    } catch (error) {
        console.log(error);
        
    }
    
}