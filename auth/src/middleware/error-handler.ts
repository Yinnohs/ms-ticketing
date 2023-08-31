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
        errors: [{message: "Unhandle error"}],
        message: err.message,
        status: 500
    }
    res.status(statusCode).json(response)
}