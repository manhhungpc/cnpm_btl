import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import database from "./src/utils/db";
import * as APIRoute from "./src/const/api.const";
import authRouter from "./src/routes/auth";
import jobRoute from "./src/routes/job";
import userRouter from "./src/routes/user";
import * as errorHandler from "./src/routes/error";

const app = express();
const PORT = 5000;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(APIRoute.ROOT, authRouter);
app.use(APIRoute.ROOT, jobRoute);
app.use(APIRoute.ROOT, userRouter);

app.use("*", errorHandler.notFound);
app.use(errorHandler.serverError);

const runSequelize = async () => {
  try {
    await database.sequelize.sync();
    console.log("SQLize is running");
  } catch (err) {
    console.log(err.message);
  }
};

runSequelize();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
