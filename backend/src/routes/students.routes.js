import { Router } from "express";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";
import {
  getAllStudentsController,
  updateStudentController,
  deleteStudentController,
} from "../controllers/students.controllers.js";

const router = Router();

// get all students
router.route("/").get(requireSignIn, getAllStudentsController);
router
  .route("/:id")
  .put(requireSignIn, isAdmin, updateStudentController)
  .delete(requireSignIn, isAdmin, deleteStudentController);

export default router;
