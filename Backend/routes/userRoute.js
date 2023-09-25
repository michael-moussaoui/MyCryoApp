import express from "express";
import UserController from "../controllers/users.js";

const router = express.Router();

router.get("/api/users", UserController.getUsers);
router.get("/api/user/:id", UserController.getUserById);
router.post("/api/addUser", UserController.addUser);
router.patch("/api/editUser/:id", UserController.editUser);
router.delete("/api/deleteUser/:id", UserController.deleteUser);

export default router;
