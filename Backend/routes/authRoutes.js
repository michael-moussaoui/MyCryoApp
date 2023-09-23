import express from "express";
import {
	registerUser,
	loginUser,
	logoutUser,
} from "../controllers/authController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);

export default userRouter;
