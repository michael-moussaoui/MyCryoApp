import { DataTypes } from "sequelize";
export default (sequelize) => {
	const Objective = sequelize.define("Objective", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		sessionSearch_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
		},
		orientation: {
			type: DataTypes.STRING,
		},
	});

	return Objective;
};
