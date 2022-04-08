import express from "express";
import * as APIRoute from "../const/api.const";
import * as authMiddleware from "../middlewares/auth.middleware";
import * as authController from "../controllers/auth.controller";
import { catchAsync } from "../utils/catchAsync";

const authRouter = express.Router();

authRouter.post(APIRoute.login, authMiddleware.login, catchAsync(authController.login));

export default authRouter;
