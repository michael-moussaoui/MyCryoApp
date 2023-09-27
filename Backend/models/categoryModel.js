import { DataTypes } from "sequelize";

export default (sequelize) => {
	const Category = sequelize.define(
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
	return Category;
};
