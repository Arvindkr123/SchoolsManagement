import { Router } from "express"
import { addUsersControllers, getUserByTokn, loginUserController, requsetUserPasswordController, getAllUsersController } from "../controllers/user.controllers.js";

let router = Router();

router.get("/", getAllUsersController)
router.route("/").post(addUsersControllers)
router.route("/auth").post(loginUserController)
router.route("/verifyToken").post(getUserByTokn)
router.route("/requestPassword").post(requsetUserPasswordController)


export default router;
