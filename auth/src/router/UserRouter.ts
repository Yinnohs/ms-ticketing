import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { CREATED } from "../utils";
import { CreateUserDTO, ResponseObject } from "../types";
import { RequestValidationError } from "../errors";
import { User } from "../models";

export const UserRouter = Router();

// hardcoded route
UserRouter.get("/users/currentUser", (req: Request, res: Response) => {
	res.status(200).send("user reitrieved");
});

UserRouter.post("/users/signin", (req: Request, res: Response) => {});

UserRouter.post("/user/signout", (req: Request, res: Response) => {});

const signupValidations = [
	body("email")
		.trim()
		.isEmpty()
		.withMessage("Email must be provided")
		.isEmail()
		.withMessage("Email must be valid"),

	body("password")
		.trim()
		.isEmpty()
		.withMessage("Password must be provided")
		.isLength({ min: 4, max: 20 })
		.withMessage("Password must be between 4 and 20 characters"),
];

UserRouter.post(
	"users/signup",
	signupValidations,
	async (req: Request, res: Response) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			throw new RequestValidationError(errors.array());
		}

		const userData: CreateUserDTO = req.body;

		const savedUser = await User.create(User.build(userData));

		const response: ResponseObject = {
			message: "CREATED",
			data: savedUser,
			errors: null,
			status: CREATED,
		};

		res.status(CREATED).json(response);
	},
);