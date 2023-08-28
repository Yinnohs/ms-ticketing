import { ValidationError } from "express-validator";

export class  RequestValidationError extends Error{
    constructor(public errors: ValidationError[]){
        super()
        // we need to do this only because we are extending a built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype)

    }

}



export class DatabaseConnectionError extends Error{
    reason = "Error connecting to the database"
    constructor(){
        super()

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }
}