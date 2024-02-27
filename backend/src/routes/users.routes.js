import { Router } from "express"
import { addUsersControllers, getUserByTokn, loginUserController, requsetUserPasswordController, getAllUsersController } from "../controllers/user.controllers.js";
import { isAdmin, requireSignIn } from "../middlewares/auth.middleware.js";

let router = Router();

router.get("/", requireSignIn, isAdmin, getAllUsersController)
router.route("/").post(requireSignIn, isAdmin, addUsersControllers)
router.route("/auth").post(loginUserController)
router.route("/verifyToken").post(getUserByTokn)
router.route("/requestPassword").post(requsetUserPasswordController)


export default router;
