import Sequelize from "sequelize";
import { db } from "../../database/db.js";

const { DataTypes } = Sequelize;

const SessionRating = db.define(
	"SessionRating",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
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

export default SessionRating;
