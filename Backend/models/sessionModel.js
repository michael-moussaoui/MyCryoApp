import Sequelize from "sequelize";
import { db } from "../../database/db.js";

const { DataTypes } = Sequelize;

const Session = db.define(
	"Session",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		// category_id: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// },

		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: true,
		},
		isRating: {
			type: DataTypes.BOOLEAN,
		},
		comment: {
			type: DataTypes.TEXT,
			defaultValue: "",
			allowNull: false,
		},
		rate: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		// user_id: {
		// 	type: DataTypes.INTEGER,
		// 	allowNull: false,
		// },

		name: {
			type: DataTypes.STRING,
		},
	},
	{
		paranoid: true,
		timestamps: true,
	}
);

db.sync({ alter: true })
	.then(() => {
		console.log("Tables created or updated");
	})
	.catch((err) => {
		console.log("Error synchronizing tables:", err);
	});

export default Session;
