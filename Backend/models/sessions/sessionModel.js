import { DataTypes } from "sequelize";

export default (sequelize) => {
	const Session = sequelize.define(
		"Session",
		{
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			category_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				defaultValue: "",
				allowNull: false,
			},
			rate: {
				type: DataTypes.STRING,
				defaultValue: "",
				allowNull: false,
			},
			comment: {
				type: DataTypes.TEXT,
				defaultValue: "",
				allowNull: false,
			},
			isRating: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{ paranoid: true }
	);

	return Session;
};
