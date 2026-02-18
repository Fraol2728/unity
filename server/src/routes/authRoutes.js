import { Router } from "express";
import { loginAdmin } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/login", loginAdmin);

export { authRouter };
