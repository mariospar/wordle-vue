import path from "path";
import { createServer } from "http";
import express from "express";
import sslRedirect from "heroku-ssl-redirect";
import helmet from "helmet";
// import cors from "cors"
import config from "../config";

const app = express();

const __dirname = path.resolve();

// app.use(cors());
app.use(helmet());
// app.use(sslRedirect);
app.use(express.static(path.join(__dirname + "../dist")));

// app.get("/word", (req, res) => {
// 	const options = {
// 		method: "GET",
// 		url: "https://random-words5.p.rapidapi.com/getRandom",
// 		params: { wordLength: "5" },
// 		headers: {
// 			"x-rapidapi-host": config.rapid_host,
// 			"x-rapidapi-key": config.rapid_key,
// 		},
// 	};

// 	axios
// 		.request(options)
// 		.then((response) => {
// 			console.log(response.data);
// 			res.statusCode(200).json(response.data);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 			res.statusCode(500);
// 		});
// });

const server = createServer(app);

// Start the server
server.listen(config.port, () => {
	console.log(`Server listening on port ${config.port}`);
});

export default server;
