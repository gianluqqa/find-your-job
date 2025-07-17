import { Router } from "express";
import { registerUserController, getAllUsersController, loginController, getUserByIdController } from "../controllers/userController";
import { validateRegister } from "../middlewares/validateRegister";
import { validateLogin } from "../middlewares/validateLogin";

const userRoutes = Router();

userRoutes.get("/", getAllUsersController);
userRoutes.get("/:id", getUserByIdController);
userRoutes.post("/register", validateRegister, registerUserController);
userRoutes.post("/login", validateLogin, loginController);

export default userRoutes;
