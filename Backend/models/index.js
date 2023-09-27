// const fs = require("fs");
// const path = require("path");
// const Sequelize = require("sequelize");
// const db = {};
// const models = path.join(__dirname, "models"); // Corrigez-le pour le chemin où se trouvent vos fichiers de modèle
// const sequelize = new Sequelize(
// 	process.env.DB_NAME,
// 	process.env.DB_USER,
// 	process.env.DB_PASSWORD,
// 	{
// 		dialect: "mysql",
// 		host: process.env.DB_HOST,
// 	}
// );

// fs.readdirSync(models)
// 	.filter(function (file) {
// 		return (
// 			file.indexOf(".") !== 0 &&
// 			file !== "index.js" &&
// 			file.slice(-3) === ".js"
// 		);
// 	})
// 	.forEach(function (file) {
// 		const model = require(path.join(models, file))(
// 			sequelize,
// 			Sequelize.DataTypes
// 		);
// 		db[model.name] = model;
// 	});

// Object.keys(db).forEach(function (modelName) {
// 	if (db[modelName].associate) {
// 		db[modelName].associate(db);
// 	}
// });

// db.Sequelize = Sequelize; // Pour accéder aux propriétés et fonctions statiques comme Op.or
// db.sequelize = sequelize; // Pour accéder aux propriétés et fonctions de connexion comme 'query' ou 'transaction'

// module.exports = db;

import { Sequelize } from "sequelize";
import { applyExtraSetup } from "./extra-setup";
import UserModel from "./userModel.js";
import CategoryModel from "./CategoryModel.js";
import ObjectiveModel from "./objectiveModel.js";
import SessionModel from "./sessions/sessionModel.js";
import SessionPictureModel from "./sessions/sessionPictureModel.js";
import SessionRatingModel from "./sessions/sessionRatingModel";
import SessionSearchModel from "./sessions/sessionSearchModel.js";

// Dans une application réelle, vous devriez stocker l'URL de connexion à la base de données en tant que variable d'environnement.
// Pour cet exemple, nous utiliserons simplement une base de données SQLite locale.
const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		dialect: "mysql",
		host: process.env.DB_HOST,
	}
);

const modelDefiners = [
	UserModel,
	CategoryModel,
	ObjectiveModel,
	SessionModel,
	SessionPictureModel,
	SessionPictureModel,
	SessionRatingModel,
	SessionSearchModel,
];
// Ajoutez plus de modèles ici si nécessaire.

// Nous définissons tous les modèles en fonction de leurs fichiers.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// Nous exécutons toute configuration supplémentaire après la définition des modèles, telle que l'ajout d'associations.
applyExtraSetup(sequelize);

// Nous exportons l'instance de connexion Sequelize à utiliser dans notre application.
export default sequelize;
