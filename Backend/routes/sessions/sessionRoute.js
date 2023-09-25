import express from "express";

import {
	getAllSessions,
	createSession,
	getSessionById,
	updateSession,
	deleteSession,
} from "../../controllers/sessions/sessionsController.js";

const router = express.Router();

router.get("/api/sessions", getAllSessions);
router.get("/api/sessions/:id", getSessionById);
router.post("/api/sessions", createSession);
router.put("/api/sessions/:id", updateSession);
router.delete("/api/sessions/:id", deleteSession);

export default router;
