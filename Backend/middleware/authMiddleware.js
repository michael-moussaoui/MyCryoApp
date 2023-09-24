import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const AuthMiddleware = (req, res, next) => {
	// Récupérer le jeton JWT depuis l'en-tête Authorization
	const token = req.header("Authorization");

	if (!token) {
		return res.status(401).json({ message: "Non authentifié" });
	}

	try {
		// Vérifier le jeton JWT avec votre clé secrète
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// Ajouter les informations de l'utilisateur à la requête pour une utilisation ultérieure
		// Vérifier le rôle de l'utilisateur
		if (decoded.role === "admin") {
			// L'utilisateur a le rôle "ADMIN", autorisez l'accès
			req.user = decoded;
			next();
		} else {
			// L'utilisateur n'a pas le rôle "ADMIN", envoi d'une réponse d'erreur
			return res.status(403).json({ message: "Accès non autorisé" });
		}
	} catch (error) {
		return res
			.status(401)
			.json({ message: "Authentification échouée" });
	}
};

export default AuthMiddleware;
