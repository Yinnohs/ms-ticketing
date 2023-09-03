import { Router } from "express";
import { userController } from "../dependencies";

const userRouter = Router()

userRouter.post("/:userId/welcome", userController.run.bind(userController))

export { userRouter }