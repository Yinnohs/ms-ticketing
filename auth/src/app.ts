import express, { Request, Response } from "express";
import { UserRouter } from "./router";
import { ErrorHandlerMiddleware } from "./middleware/error-handler";
import { DatabaseConnectionError } from "./errors";
import "express-async-errors";

export const app = express();
app.use(express.json());

// route
app.use("/api/v1/", UserRouter);

app.get("/hc", (req: Request, res: Response) => {
	//res.status(200).send("Server up and Running")
	throw new DatabaseConnectionError();
});

// route handler middleware
app.use(ErrorHandlerMiddleware);
