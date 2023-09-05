import { validationResult } from "express-validator";
import { RequestValidationError } from "../errors";
import { CreateUserDTO, ResponseObject } from "../types";
import { BAD_REQUEST, CREATED } from "../utils";
import { Request, Response } from "express";
import { UserService } from "../services";

class UserController {
	static async signup(req: Request, res: Response) {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			throw new RequestValidationError(errors.array());
		}

		const userData: CreateUserDTO = req.body;

		const userAllreadyExist = await UserService.checkEmailIsTaken(userData.email)

		if (userAllreadyExist) {
			const response: ResponseObject = {
				message: "Email already used",
				data: userAllreadyExist,
				errors: [{ message: "Email was already use", field: "email" }],
				status: BAD_REQUEST,
			};

			return res.status(BAD_REQUEST).json(response);
		}

		const savedUser = await UserService.createUser(userData)

		savedUser.password = "";

		const response: ResponseObject = {
			message: "CREATED",
			data: savedUser,
			errors: null,
			status: CREATED,
		};

		res.status(CREATED).json(response);
	}
}

export { UserController };
