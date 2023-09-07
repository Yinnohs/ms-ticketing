import { CommonErrorStructure, ErrorResponse } from "../types";
import { BAD_REQUEST } from "../utils";

class BadRequestError extends Error implements ErrorResponse{
    reason: string 
    statusCode: number = BAD_REQUEST
    constructor(reason:string){
        super(reason)
        Object.setPrototypeOf(this, BadRequestError.prototype);
        this.reason = reason
    } 
    serializeError(): CommonErrorStructure[] {
        return [{
        message: this.reason,
        }]
    }

} 

export { BadRequestError }