import express from "express";

import {
	getAllObjectives,
	createObjective,
	getObjectiveById,
	updateObjective,
	deleteObjective,
} from "../controllers/objectivesController.js";

const router = express.Router();

router.get("/api/objectives", getAllObjectives);
router.get("/api/objective/:id", getObjectiveById);
router.post("/api/objective", createObjective);
router.put("/api/objective/:id", updateObjective);
router.delete("/api/objective/:id", deleteObjective);

export default router;
