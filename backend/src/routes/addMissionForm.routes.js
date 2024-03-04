import { Router } from "express";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";
import { createAddMissionController } from "../controllers/addmission.controllers.js";

const router = Router();

router.route("/").post(requireSignIn, isAdmin, createAddMissionController);

export default router;
