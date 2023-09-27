import dotenv from "dotenv";
dotenv.config;
const config = {
	database: {
		host: process.env.DB_HOST,
		port: process.env.SERVER_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
};

export default config;
