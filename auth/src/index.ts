import { app } from "./app";
import { initialConfiguration } from "./config";
import { connecWithMongoDb } from "./database";

app.listen(initialConfiguration.serverPort, () => {
	connecWithMongoDb();
	console.log(
		`Runnin Auth Server on http://localhost:${initialConfiguration.serverPort}`,
	);
});
