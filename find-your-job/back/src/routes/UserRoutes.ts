import { Router } from "express";
import { registerUserController, getAllUsersController, loginController } from "../controllers/userController";
import { validateRegister } from "../middlewares/validateRegister";
import { validateLogin } from "../middlewares/validateLogin";

const router = Router();

router.get("/", getAllUsersController);
router.post("/register", validateRegister, registerUserController);
router.post("/login", validateLogin, loginController);

export default router;
