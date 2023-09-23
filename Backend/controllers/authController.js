import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { db } from "../database/db.js";

const salt = 10;

export const registerUser = (req, res) => {
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
};

export const loginUser = (req, res) => {
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
						return res.json({ Status: "Success" });
					} else {
						return res.json({ Error: "Password not matched" });
					}
				}
			);
		} else {
			return res.json({ Error: "No email existed" });
		}
	});
};

export const logoutUser = (req, res) => {
	res.clearCookie("token");
	return res.json({ Status: "Success" });
};
