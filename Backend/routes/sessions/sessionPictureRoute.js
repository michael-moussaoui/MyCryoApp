import express from "express";

import {
	getAllSessionsPicture,
	getSessionPictureById,
	createSessionPicture,
	updateSessionPicture,
	deleteSessionPicture,
} from "../../controllers/sessions/sessionsPictureController.js";

const router = express.Router();

router.get("/api/sessionsPicture", getAllSessionsPicture);
router.get("/api/sessionPicture/:id", getSessionPictureById);
router.post("/api/sessionPicture", createSessionPicture);
router.put("/api/sessionPicture/:id", updateSessionPicture);
router.delete("/api/sessionPicture/:id", deleteSessionPicture);

export default router;
