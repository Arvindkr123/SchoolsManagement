import { Router } from "express";
import { requireSignIn } from "../middlewares/auth.middleware.js";
import { getAllStudentsController } from "../controllers/students.controllers.js";

const router = Router();

// get all students
router.route("/").get(requireSignIn, getAllStudentsController);

export default router;
