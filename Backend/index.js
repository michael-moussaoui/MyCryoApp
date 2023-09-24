import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./database/db.js";

import { verifyUser } from "./middleware/authUser.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use(
	cors({
		origin: ["http://localhost:8085"],
		method: ["POST", "GET", "PUT", "PATCH", "DELETE"],
		credentials: true,
	})
);

app.use(authRoutes);
app.get("/", verifyUser, (req, res) => {
	return res.json({ Status: "Success", firstname: req.firstname });
});

app.get("/home", verifyUser, (req, res) => {
	if (req.role === "admin") {
		return res.json({
			Status: "Success",
			message: "Bienvenue sur le dashboard Attitude Cryo",
		});
	} else {
		return res.json({ Error: "Vous n'avez pas accès a cette page" });
	}
});

app.listen(process.env.SERVER_PORT, () => {
	console.log("Running server...");
});
