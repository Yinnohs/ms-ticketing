import { ValidationError } from "express-validator";
import { INTERNAL_SERVER_ERROR, INVALID_REQUEST } from "../utils";

export type CommonErrorStructure = {
    message:string,
    field?:string
}

export interface ErrorResponse{
    reason?:string
    statusCode:number
    serializeError(): CommonErrorStructure[]
}