import express from "express";
import * as APIRoute from "../const/api.const";
import * as jobMiddlware from "../middlewares/jobs.middleware";
import * as authMiddleware from "../middlewares/auth.middleware";
import * as jobController from "../controllers/job.controller";
import { catchAsync } from "../utils/catchAsync";

const jobRoute = express.Router();

jobRoute.get(APIRoute.jobs, authMiddleware.validateToken, jobController.getAllJobs);

jobRoute.get(APIRoute.job_id, authMiddleware.validateToken, jobController.getJobById);

jobRoute.post(
  APIRoute.jobs,
  authMiddleware.validateToken,
  jobMiddlware.createJob,
  catchAsync(jobController.createJob)
);

jobRoute.put(
  APIRoute.job_id,
  authMiddleware.validateToken,
  jobMiddlware.updateJob,
  catchAsync(jobController.updateJob)
);

jobRoute.delete(
  APIRoute.job_id,
  authMiddleware.validateToken,
  jobMiddlware.deleteJob,
  jobController.deleteJob
);

export default jobRoute;
