import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors";
import { User } from "../models";
import { CreateUserDTO, ResponseObject } from "../types";
import { BAD_REQUEST, CREATED } from "../utils";
import { Request, Response } from "express";

class UserController{
    constructor(){}

   static async signup  (req: Request, res: Response){
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }

        const userData: CreateUserDTO = req.body;

        const userAllreadyExist = await User.findOne({email: userData.email})
        
        if(userAllreadyExist){
            const response: ResponseObject = {
                message: "Email already used",
                data: userAllreadyExist,
                errors: [{message: "Email was already use", field: "email"}],
                status: BAD_REQUEST,
            };

            return res.status(BAD_REQUEST).json(response)
        }


        const savedUser = await User.create(User.build(userData));
        
        savedUser.password = ""

        const response: ResponseObject = {
            message: "CREATED",
            data: savedUser,
            errors: null,
            status: CREATED,
        };

        res.status(CREATED).json(response);
    }
}

export { UserController }