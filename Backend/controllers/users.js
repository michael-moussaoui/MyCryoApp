import db from "../database/db.js";
import bcrypt from "bcrypt";

const User = db.User;

const UserController = {
	async getUsers(req, res) {
		try {
			const response = await User.findAll({
				attributes: ["id", "firstname", "lastname", "role", "email"],
			});
			res.status(200).json(response);
		} catch (error) {
			res.status(500).json({ msg: error.message });
		}
	},

	async getUserById(req, res) {
		try {
			const response = await User.findOne({
				attributes: ["firstname", "lastname", "role", "email"],
				where: {
					id: req.params.id,
				},
			});
			res.status(200).json(response);
		} catch (error) {
			res.status(500).json({ msg: error.message });
		}
	},

	async addUser(req, res) {
		try {
			const { firstname, lastname, email, password, role } = req.body;

			// Vérifiez si l'utilisateur existe déjà
			const existingUser = await User.findOne({ where: { email } });
			if (existingUser) {
				return res
					.status(400)
					.json({ message: "Cet utilisateur existe déjà" });
			}
			// Hachez le mot de passe avec bcrypt
			const hashedPassword = await bcrypt.hash(password, 10);

			// Créez un nouvel utilisateur
			const newUser = await User.create({
				firstname,
				lastname,
				email,
				password: hashedPassword,
				role,
			});

			return res.status(201).json({
				user: newUser,
				message: "Utilisateur créé avec succès",
			});
		} catch (error) {
			return res.status(500).json({
				message:
					"Une erreur est survenue lors de la création de l'utilisateur",
			});
		}
	},

	async editUser(req, res) {
		try {
			const userId = req.params.id; // Récupérer l'ID de l'utilisateur à éditer
			const { firstname, lastname, email, password, role } = req.body;

			// Vérifier si l'utilisateur existe
			const existingUser = await User.findByPk(userId);
			if (!existingUser) {
				return res
					.status(404)
					.json({ message: "Utilisateur non trouvé" });
			}

			// Mettre à jour les informations de l'utilisateur
			existingUser.firstname = firstname;
			existingUser.lastname = lastname;
			existingUser.email = email;
			existingUser.password = password; //  Gérer la mise à jour du mot de passe ici
			existingUser.role = role;

			// Enregistrez les modifications
			await existingUser.save();

			return res.status(200).json({
				user: existingUser,
				message: "Utilisateur mis à jour avec succès",
			});
		} catch (error) {
			return res.status(500).json({
				message:
					"Une erreur est survenue lors de la mise à jour de l'utilisateur",
			});
		}
	},

	async deleteUser(req, res) {
		try {
			const userId = req.params.id; // Récupérer l'ID de l'utilisateur à supprimer

			// Vérifier si l'utilisateur existe
			const existingUser = await User.findByPk(userId);
			if (!existingUser) {
				return res
					.status(404)
					.json({ message: "Utilisateur non trouvé" });
			}

			// Supprimer l'utilisateur
			await existingUser.destroy();

			return res
				.status(200)
				.json({ message: "Utilisateur supprimé avec succès" });
		} catch (error) {
			return res.status(500).json({
				message:
					"Une erreur est survenue lors de la suppression de l'utilisateur",
			});
		}
	},
};

export default UserController;

// export const createUser = async (req, res) => {
// 	const { name, email, password, confPassword, role } = req.body;
// 	if (password !== confPassword)
// 		return res
// 			.status(400)
// 			.json({ msg: "Password and Confirm Password do not match" });
// 	const hashPassword = await bcrypt.hash(password);
// 	try {
// 		await User.create({
// 			name: name,
// 			email: email,
// 			role: role,
// 			password: hashPassword,
// 		});
// 		res.status(201).json({ msg: "Register success" });
// 	} catch (error) {
// 		res.status(400).json({ msg: error.message });
// 	}
// };

// export const updateUser = async (req, res) => {
// 	const user = await User.findOne({
// 		where: {
// 			id: req.params.id,
// 		},
// 	});
// 	if (!user) return res.status(404).json({ msg: "User not found" });
// 	const { name, email, password, confPassword, role } = req.body;
// 	let hashPassword;
// 	if (password === "" || password === null) {
// 		hashPassword = user.password;
// 	} else {
// 		hashPassword = await bcrypt.hash(password);
// 	}
// 	if (password !== confPassword)
// 		return res
// 			.status(400)
// 			.json({ msg: "Password and Confirm Password do not match" });
// 	try {
// 		await User.update(
// 			{
// 				name: name,
// 				email: email,
// 				password: hashPassword,
// 				role: role,
// 			},
// 			{
// 				where: {
// 					id: user.id,
// 				},
// 			}
// 		);
// 		res.status(200).json({ msg: "User Updated" });
// 	} catch (error) {
// 		res.status(400).json({ msg: error.message });
// 	}
// };

// export const deleteUser = async (req, res) => {
// 	const user = await User.findOne({
// 		where: {
// 			uuid: req.params.id,
// 		},
// 	});
// 	if (!user) return res.status(404).json({ msg: "User not found" });
// 	try {
// 		await User.destroy({
// 			where: {
// 				id: user.id,
// 			},
// 		});
// 		res.status(200).json({ msg: "User Deleted" });
// 	} catch (error) {
// 		res.status(400).json({ msg: error.message });
// 	}
// };
