import { config } from "dotenv";

class InitialConfig {
	public serverPort: number;
	public mongoDbConnection :string;

	constructor() {
		config();
		this.serverPort = process.env.SERVER_PORT
			? parseInt(process.env.SERVER_PORT, 10)
			: 5001;

		this.mongoDbConnection = process.env.ATLAS_MONGODB_URL || "mongodb://auth-mongo.service:27017/auth"
	}

}

export const initialConfiguration = new InitialConfig();
