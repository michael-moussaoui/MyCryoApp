import express, { Router } from "express";

import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { DB, db } from "./database/db.js";

import sessionRoutes from "./routes/sessions/sessionRoute.js";
import userRoutes from "./routes/userRoute.js";

const salt = 10;

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: ["http://localhost:5173"],
		method: ["POST", "GET", "PUT", "PATCH"],
		credentials: true,
	})
);

app.use(cookieParser());

const verifyUser = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) {
		return res.json({ Error: "You are not authentincated" });
	} else {
		jwt.verify(token, "jwt-secret-key", (err, decoded) => {
			if (err) {
				return res.json({ Error: "Token is not OK" });
			} else {
				req.role = decoded.role;
				req.firstname = decoded.firstname;
				next();
			}
		});
	}
};
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

app.post("/register", (req, res) => {
	const sql =
		"INSERT INTO userss (`firstname`,`lastname`,`role`,`email`,`password`) VALUES (?)";
	bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
		if (err) return res.json({ Error: "Error for hashing password" });
		const values = [
			req.body.firstname,
			req.body.lastname,
			req.body.role,
			req.body.email,
			hash,
		];
		db.query(sql, [values], (err, result) => {
			if (err) {
				console.error("SQL Error:", err.message);
				return res.json({ Error: "Inserting data Error in server" });
			}
			return res.json({ Status: "Success" });
		});
	});
});

app.post("/login", (req, res) => {
	const sql = "SELECT * FROM userss WHERE email = ?";
	db.query(sql, [req.body.email], (err, data) => {
		if (err) return res.json({ Error: "Login error in server" });
		if (data.length > 0) {
			bcrypt.compare(
				req.body.password.toString(),
				data[0].password,
				(err, response) => {
					if (err)
						return res.json({ Error: "Password compare error" });
					if (response) {
						const firstname = data[0].firstname;
						const role = data[0].role;
						const token = jwt.sign(
							{ firstname, role },
							"jwt-secret-key",
							{
								expiresIn: "1d",
							}
						);
						res.cookie("token", token);
						return res.json({
							Status: "Success",
						});
					} else {
						return res.json({ Error: "Password not matched" });
					}
				}
			);
		} else {
			return res.json({ Error: "No email existed" });
		}
	});
});

app.get("/logout", (req, res) => {
	res.clearCookie("token");
	return res.json({ Status: "Success" });
});

app.use(sessionRoutes);
app.use(userRoutes);

DB.sync()
	.then(() => console.log("database connection OK"))
	.then(() => {});
app.listen(process.env.SERVER_PORT, () => {
	console.log("Running server...");
});
