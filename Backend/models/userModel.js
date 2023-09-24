import { Sequelize } from "sequelize";
import { db } from "../database/db.js";

const { DataTypes } = Sequelize;

const User = db.define(
	"User",
	{
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
				isEmail: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
	},
	{
		paranoid: true,
		freezeTableName: true,
		timestamps: false,
	}
);

db.sync({ alter: true })
	.then(() => {
		console.log("Tables created or updated.");
	})
	.catch((error) => {
		console.error("Error synchronizing tables:", error);
	});

export default User;
