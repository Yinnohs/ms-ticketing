import { ErrorResponse, CommonErrorStructure } from "../types";
import { INTERNAL_SERVER_ERROR } from "../utils";

export class DatabaseExecutionError extends Error implements ErrorResponse {
	reason: string; 
    statusCode: number = INTERNAL_SERVER_ERROR;

	constructor(reason:string) {
		super();
        this.reason = reason
		Object.setPrototypeOf(this, DatabaseExecutionError.prototype);
	}

	serializeError(): CommonErrorStructure[] {
		return [{ message: this.reason }];
	}
}
