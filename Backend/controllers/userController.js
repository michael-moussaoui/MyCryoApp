import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserController = {
	async register(req, res) {
		try {
			const { firstname, lastname, email, password, role } = req.body;

			// Vérifier si l'utilisateur existe déjà
			const existingUser = await User.findOne({ where: { email } });
			if (existingUser) {
				return res
					.status(400)
					.json({ message: "Cet utilisateur existe déjà" });
			}

			// Hacher le mot de passe
			const hashedPassword = await bcrypt.hash(password, 10);

			// Créer un nouvel utilisateur
			const newUser = await User.create({
				firstname,
				lastname,
				email,
				password: hashedPassword,
				role,
			});

			// Créer un jeton d'authentification (JWT) pour l'utilisateur
			const token = jwt.sign(
				{ userId: newUser.id, email: newUser.email },
				process.env.JWT_SECRET
			);

			return res.status(201).json({ user: newUser, token });
		} catch (error) {
			return res.status(500).json({
				message: "Une erreur est survenue lors de l'inscription",
			});
		}
	},

	async login(req, res) {
		try {
			const { email, password } = req.body;

			// Rechercher l'utilisateur dans la base de données
			const user = await User.findOne({ where: { email } });
			if (!user) {
				return res.status(401).json({
					message: "Adresse e-mail ou mot de passe incorrect",
				});
			}

			// Vérifier le mot de passe
			const passwordMatch = await bcrypt.compare(
				password,
				user.password
			);
			if (!passwordMatch) {
				return res.status(401).json({
					message: "Adresse e-mail ou mot de passe incorrect",
				});
			}

			// Créer un jeton d'authentification (JWT) pour l'utilisateur
			const token = jwt.sign(
				{ userId: user.id, email: user.email },
				process.env.JWT_SECRET
			);

			return res.status(200).json({ user, token });
		} catch (error) {
			return res.status(500).json({
				message: "Une erreur est survenue lors de la connexion",
			});
		}
	},

	async logout(req, res) {
		res.status(200).json({ message: "Déconnecté avec succès" });
	},
};

export default UserController;
