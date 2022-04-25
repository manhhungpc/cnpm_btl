import express from "express";
import * as APIRoute from "../const/api.const";
import * as authMiddleware from "../middlewares/auth.middleware";
import * as userMiddleware from "../middlewares/user.middleware";
import * as userController from "../controllers/user.controller";
import { catchAsync } from "../utils/catchAsync";

const userRouter = express.Router();

userRouter.put(
  APIRoute.user_id,
  authMiddleware.validateToken,
  userMiddleware.updateProfile,
  catchAsync(userController.updateProfile)
);

userRouter.get(APIRoute.users, authMiddleware.validateToken, catchAsync(userController.getUsers));

userRouter.get(
  APIRoute.user_id,
  authMiddleware.validateToken,
  catchAsync(userController.getUserById)
);

userRouter.delete(
  APIRoute.user_id,
  authMiddleware.validateToken,
  userMiddleware.deleteProfile,
  userController.deleteProfile
);

export default userRouter;
