import { ErrorResponse, CommonErrorStructure } from "../types";
import { INTERNAL_SERVER_ERROR } from "../utils";

export class DatabaseConnectionError extends Error implements ErrorResponse{

    reason:string = "Error connecting to the database"
    statusCode: number = INTERNAL_SERVER_ERROR;

    constructor(){
        super()
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
    }
    
    serializeError(): CommonErrorStructure[] {
        return [{message: this.reason}]
    }
}