import { NextFunction, Request, Response, response } from "express";
import { DatabaseConnectionError, RequestValidationError, ResponseObject } from "../types";
import { INTERNAL_SERVER_ERROR, INVALID_REQUEST } from "../utils";


export const ErrorHandlerMiddleware = (err: Error, req:Request,res:Response, next: NextFunction) => {
    if(!err){
        return next()
    }

    let statusCode = INVALID_REQUEST

    const response:ResponseObject = {
        data: null,
        errors: {message: "Unhandle error"},
        message: err.message,
        status: 500
    }
     
    if(err instanceof RequestValidationError){
        const formattedErrors = err.errors.map((error)=> {
            return {message: error.msg, field: error.type}
        })
        response.errors = formattedErrors
        response.status = INVALID_REQUEST
        statusCode = INVALID_REQUEST
    }else if (err instanceof DatabaseConnectionError){
        response.status = INTERNAL_SERVER_ERROR
        statusCode = INTERNAL_SERVER_ERROR
        response.errors = {message: err.reason}
    }
    res.status(statusCode).json(response)
}