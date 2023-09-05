import { ValidationError } from "express-validator";
import { CommonErrorStructure, ErrorResponse } from "../types";
import { BAD_REQUEST } from "../utils";

export class RequestValidationError extends Error implements ErrorResponse {
	statusCode: number = BAD_REQUEST;
	constructor(public errors: ValidationError[]) {
		super();
		this.statusCode = BAD_REQUEST;
		// we need to do this only because we are extending a built in class
		Object.setPrototypeOf(this, RequestValidationError.prototype);
	}

	serializeError(): CommonErrorStructure[] {
		return this.errors.map((error) => {
			return { message: error.msg, field: error.type };
		});
	}
}
