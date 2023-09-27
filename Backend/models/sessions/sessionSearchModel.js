import { DataTypes } from "sequelize";

export default (sequelize) => {
	const SessionSearch = sequelize.define(
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

	return SessionSearch;
};
