import { validationResult } from "express-validator";
import { BadRequestError, DatabaseExecutionError, RequestValidationError } from "../errors";
import { CreateUserDTO, ResponseObject } from "../types";
import { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR } from "../utils";
import { Request, Response } from "express";
import { UserService } from "../services";

class UserController {
	static async signup(req: Request, res: Response) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				throw new RequestValidationError(errors.array());
			}

			const userData: CreateUserDTO = req.body;

			const userAllreadyExist = await UserService.checkEmailIsTaken(userData.email)

			if (userAllreadyExist) {
				throw new BadRequestError("email allready in use")
			}

			const savedUser = await UserService.createUser(userData)

			if(!savedUser){
				throw new DatabaseExecutionError("Something bad ocurred While creating the user")
			}

			savedUser.password = "";

			const response: ResponseObject = {
				message: "CREATED",
				data: savedUser,
				errors: null,
				status: CREATED,
			};

			res.status(CREATED).json(response);
		} catch (error) {
			
			console.log(error)

			const response: ResponseObject = {
				message: "An unhandle error ocurred",
				data: null,
				errors: [],
				status: INTERNAL_SERVER_ERROR,
			};

			res.send(INTERNAL_SERVER_ERROR).json(response)
		}
		
	}
}

export { UserController };
