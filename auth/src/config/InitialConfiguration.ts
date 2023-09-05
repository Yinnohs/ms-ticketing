import { config } from "dotenv";

class InitialConfig {
	public serverPort: number;

	constructor() {
		config();
		this.serverPort = process.env.SERVER_PORT
			? parseInt(process.env.SERVER_PORT, 10)
			: 5001;
	}
}

export const initialConfiguration = new InitialConfig();
