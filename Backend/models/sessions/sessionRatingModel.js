import { DataTypes } from "sequelize";

export default (sequelize) => {
	const SessionRating = sequelize.define(
		"SessionRating",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			session_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			paranoid: true,
			timestamps: true,
		}
	);

	return SessionRating;
};
