import Sequelize from "sequelize";
import { db } from "../../database/db.js";

const { DataTypes } = Sequelize;
const Objective = db.define("Objective", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	// session_id: {
	// 	type: Sequelize.INTEGER,
	// },
	description: {
		type: Sequelize.STRING,
	},
	orientation: {
		type: Sequelize.STRING,
	},
});

db.sync({ alter: true })
	.then(() => {
		console.log("Tables created or updated.");
	})
	.catch((error) => {
		console.error("Error synchronizing tables:", error);
	});

export default Objective;
