import express from "express";

import {
	getAllSessionsRating,
	getSessionRatingById,
	createSessionRating,
	updateSessionRating,
	deleteSessionRating,
} from "../../controllers/sessions/sessionsRatingController.js";

const router = express.Router();

router.get("/api/sessionsRating", getAllSessionsRating);
router.get("/api/sessionRating/:id", getSessionRatingById);
router.post("/api/sessionRating", createSessionRating);
router.put("/api/sessionRating/:id", updateSessionRating);
router.delete("/api/sessionRating/:id", deleteSessionRating);

export default router;
