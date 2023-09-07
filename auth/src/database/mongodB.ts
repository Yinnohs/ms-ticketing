import mongoose from "mongoose";
import { initialConfiguration } from "../config";

export const connecWithMongoDb = async () => {
	try {
		await mongoose.connect(initialConfiguration.mongoDbConnection);
		console.log("Connected to the database mongodb")
	} catch (error) {
		console.log(error);
	}
};
