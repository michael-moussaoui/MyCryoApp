import Sequelize from "sequelize";
import { db } from "../../database/db.js";

const { DataTypes } = Sequelize;

const SessionSearch = db.define(
	"SessionSearch",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},

		objective: {
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

export default SessionSearch;
