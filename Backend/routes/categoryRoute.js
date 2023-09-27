import express from "express";

import {
	getAllCategories,
	createCategory,
	getCategoryById,
	updateCategory,
	deleteCategory,
} from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/api/categories", getAllCategories);
router.get("/api/category/:id", getCategoryById);
router.post("/api/category", createCategory);
router.put("/api/category/:id", updateCategory);
router.delete("/api/category/:id", deleteCategory);

export default router;
