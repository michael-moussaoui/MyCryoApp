import Sequelize from "sequelize";
import { db } from "../../database/db.js";

const { DataTypes } = Sequelize;

const Category = db.define(
	"Category",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
		},
	},
	{
		paranoid: true,
	}
);

db.sync({ alter: true })
	.then(() => {
		console.log("Tables created or updated.");
	})
	.catch((error) => {
		console.error("Error synchronizing tables:", error);
	});

export default Category;
