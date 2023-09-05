import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { BAD_REQUEST, CREATED } from "../utils";
import { CreateUserDTO, ResponseObject } from "../types";
import { RequestValidationError } from "../errors";
import { User } from "../models";

export const UserRouter = Router();

// hardcoded route
UserRouter.get("/users/currentUser", async(req: Request, res: Response) => {


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
	
);