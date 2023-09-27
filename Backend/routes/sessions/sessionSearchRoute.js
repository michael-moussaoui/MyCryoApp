import express from "express";

import {
	getAllSessionsSearch,
	getSessionSearchById,
	createSessionSearch,
	updateSessionSearch,
	deleteSessionSearch,
} from "../../controllers/sessions/sessionsSearchController.js";

const router = express.Router();

router.get("/api/sessionsSearch", getAllSessionsSearch);
router.get("/api/sessionSearch/:id", getSessionSearchById);
router.post("/api/sessionSearch", createSessionSearch);
router.put("/api/sessionSearch/:id", updateSessionSearch);
router.delete("/api/sessionSearch/:id", deleteSessionSearch);

export default router;
