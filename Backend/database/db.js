import { Sequelize } from "sequelize";
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const database = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

export const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		dialect: "mysql",
	}
);

const db = {};
db.sequelize = sequelize;

// Import the models from the `models` directory.
import User from "../models/userModel.js";
import Category from "../models/categoryModel.js";
import Objective from "../models/objectiveModel.js";
import Session from "../models/sessions/sessionModel.js";
import SessionPicture from "../models/sessions/sessionPictureModel.js";
import SessionRating from "../models/sessions/sessionRatingModel.js";
import SessionSearch from "../models/sessions/sessionSearchModel.js";

db.User = User(sequelize);
db.Category = Category(sequelize);
db.Objective = Objective(sequelize);
db.Session = Session(sequelize);
db.SessionPicture = SessionPicture(sequelize);
db.SessionRating = SessionRating(sequelize);
db.SessionSearch = SessionSearch(sequelize);

// Define the relationships between the models.

db.User.hasMany(db.Session, {
	// foreignKey: "user_id",
});
db.User.hasMany(db.SessionRating, {
	// foreignKey: "user_id",
});

db.Category.hasMany(db.Session, {});
db.Objective.hasMany(db.SessionSearch, {
	// foreignKey: "sessionSearch_id",
});
db.Session.hasMany(db.SessionRating, {});
db.Session.hasMany(db.SessionPicture, {});
db.Session.belongsTo(db.User);
db.SessionPicture.belongsTo(db.Session);
db.SessionRating.belongsTo(db.Session);
db.SessionRating.belongsTo(db.User);
db.SessionSearch.belongsTo(db.Objective);

// Synchronisation des modèles
db.sequelize.sync({ alter: true });

export default db;

// import { Sequelize } from "sequelize";
// import mysql from "mysql";
// import dotenv from "dotenv";
// dotenv.config();

// // import User from "../models/userModel.js";
// // // DB.User = require("../models/userModel.js")(Sequelize);
// // import Category from "../models/categoryModel.js";
// // // DB.Category = require("../models/categoryModel.js")(Sequelize);
// // import Objective from "../models/objectiveModel.js";
// // // DB.Objective = require("../models/objectiveModel.js")(Sequelize);
// // import Session from "../models/sessions/sessionModel.js";
// // // DB.Session = require("../models/sessions/sessionModel.js")(Sequelize);
// // import SessionPicture from "../models/sessions/sessionPictureModel.js";
// // // DB.SessionPicture =
// // // 	require("../models/sessions/sessionPictureModel.js")(Sequelize);
// // import SessionRating from "../models/sessions/sessionRatingModel.js";
// // //
// // import SessionSearch from "../models/sessions/sessionSearchModel.js";
// // // DB.SessionSearch = require("../models/sessions/sessionSearchModel")(
// // // 	Sequelize
// // // );

// export const db = mysql.createConnection({
// 	host: process.env.DB_HOST,
// 	user: process.env.DB_USER,
// 	password: process.env.DB_PASSWORD,
// 	database: process.env.DB_NAME,
// });

// export const DB = new Sequelize(
// 	process.env.DB_NAME,
// 	process.env.DB_USER,
// 	process.env.DB_PASSWORD,
// 	{
// 		dialect: "mysql",
// 		host: process.env.DB_HOST,
// 	}
// );

// // db.sequelize = sequelize;

// // import User from "../models/userModel.js";
// // import Category from "../models/categoryModel.js";
// // import Objective from "../models/objectiveModel.js";
// // import Session from "../models/sessions/sessionModel.js";
// // import SessionPicture from "../models/sessions/sessionPictureModel.js";
// // import SessionRating from "../models/sessions/sessionRatingModel.js";
// // import SessionSearch from "../models/sessions/sessionSearchModel.js";

// // db.User = User;
// // db.Category = Category;
// // db.Objective = Objective;
// // db.Session = Session;
// // db.SessionPicture = SessionPicture;
// // db.SessionRating = SessionRating;
// // db.SessionSearch = SessionSearch;

// // const db = {
// // 	Sequelize,
// // 	Sequelize,
// // 	User: User(Sequelize),
// // 	Category: Category(Sequelize),
// // 	Objective: Objective(Sequelize),
// // 	Session: Session(Sequelize),
// // 	SessionPicture: SessionPicture(Sequelize),
// // 	SessionRating: SessionRating(Sequelize),
// // 	SessionSearch: SessionSearch(Sequelize),
// // };

// // db.User.hasMany(db.Session, {
// // 	foreignKey: "id_user",
// // });
// // db.User.hasMany(db.SessionRating, {
// // 	foreignKey: "id_user",
// // });

// // db.Category.hasMany(db.Session);

// // db.Objective.belongsTo(db.SessionSearch);

// // db.Session.belongsTo(db.Category);
// // db.Session.belongsTo(db.User);
// // db.Session.hasMany(db.SessionRating);
// // db.Session.hasOne(db.SessionPicture);

// // db.SessionRating.belongsTo(db.Session);
// // db.SessionRating.belongsTo(db.User);

// // db.SessionPicture.belongsTo(db.Session);

// // db.SessionSearch.hasMany(db.Objective);
