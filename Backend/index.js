import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(
	cors({
		origin: ["http://localhost:5173"],
		method: ["POST", "GET", "PUT"],
		credentials: true,
	})
);

app.listen(process.env.SERVER_PORT, () => {
	console.log("Running server...");
});
