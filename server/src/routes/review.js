import express from "express";
import * as APIRoute from "../const/api.const";
import * as reviewMiddleware from "../middlewares/review.middleware";
import * as authMiddleware from "../middlewares/auth.middleware";
import * as reviewController from "../controllers/review.controller";
import { catchAsync } from "../utils/catchAsync";

const reviewRouter = express.Router();

reviewRouter.get(
  APIRoute.review_job,
  authMiddleware.validateToken,
  reviewMiddleware.getReviewByJobId,
  catchAsync(reviewController.getReviewByJobId)
);

reviewRouter.get(
  APIRoute.review_user,
  authMiddleware.validateToken,
  reviewMiddleware.getReviewByUserId,
  catchAsync(reviewController.getReviewByUserId)
);

reviewRouter.post(
  APIRoute.review_job,
  authMiddleware.validateToken,
  reviewMiddleware.newJobReview,
  catchAsync(reviewController.newJobReview)
);

reviewRouter.post(
  APIRoute.review_user,
  authMiddleware.validateToken,
  reviewMiddleware.newUserReview,
  catchAsync(reviewController.newUserReview)
);

reviewRouter.delete(
  APIRoute.review_id,
  authMiddleware.validateToken,
  reviewMiddleware.deleteReview,
  catchAsync(reviewController.deleteReview)
);

export default reviewRouter;
