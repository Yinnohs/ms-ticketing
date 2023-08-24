import {Request, Response, Router} from 'express'

export const UserRouter = Router()

// hardcoded route
UserRouter.get('/users/currentUser', (req: Request, res:Response)=>{
    res.status(200).send("user reitrieved")
})

UserRouter.post('/users/signin', (req:Request,  res: Response)=>{

})

UserRouter.post('/user/signout', (req:Request,  res: Response)=>{

})

UserRouter.post('users/signup',(req:Request,  res: Response)=>{
    const {email , password} = req.body

    if(!email || !password){
        return 
    }
})