import { NextFunction, Request, Response, response } from "express";
import { ErrorResponse, ResponseObject } from "../types";

export const ErrorHandlerMiddleware = (
	err: ErrorResponse,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (!err) {
		return next();
	}

	const response: ResponseObject = {
		data: null,
		errors: err.serializeError(),
		message: err.reason || "",
		status: err.statusCode,
	};

	res.status(err.statusCode).json(response);
};
