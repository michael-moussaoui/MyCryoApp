import Sequelize from "sequelize";
import { db } from "../../database/db.js";

const { DataTypes } = Sequelize;

const SessionPicture = db.define(
	"SessionPicture",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},

		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: true,
		},

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

export default SessionPicture;
