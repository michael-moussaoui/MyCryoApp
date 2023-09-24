import express from "express";
import UserController from "../controllers/userController.js";
import AuthMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Route pour l'inscription (register)
router.post("/register", UserController.register);

// Route pour la connexion (login)
router.post("/login", UserController.login);

// Route pour la déconnexion (logout)
router.get("/logout", AuthMiddleware, UserController.logout);

router.get("/admin/dashboard", AuthMiddleware, (req, res) => {
	// Route nécessite un utilisateur "ADMIN" pour y accéder
	return res.json({
		message: "Bienvenue sur le tableau de bord de l'administrateur",
	});
});

export default router;
