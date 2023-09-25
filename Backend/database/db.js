// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";

// dotenv.config();

// export const db = new Sequelize(
// 	process.env.DB_NAME,
// 	process.env.DB_USER,
// 	process.env.DB_PASSWORD,
// 	{
// 		host: process.env.DB_HOST,
// 		dialect: "mysql",
// 	}
// );

// try {
// 	await db.authenticate();
// 	console.log("Connection has been established successfully.");
// } catch (error) {
// 	console.error("Unable to connect to the database:", error);
// }

import { Sequelize } from "sequelize";
import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export const DB = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		dialect: "mysql",
		host: process.env.DB_HOST,
	}
);

export const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});
