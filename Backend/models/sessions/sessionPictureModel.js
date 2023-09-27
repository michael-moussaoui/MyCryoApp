import { DataTypes } from "sequelize";

export default (sequelize) => {
	const SessionPicture = sequelize.define(
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
			session_id: {
				type: DataTypes.INTEGER,
			},
		},
		{
			paranoid: true,
			timestamps: true,
		}
	);

	return SessionPicture;
};
