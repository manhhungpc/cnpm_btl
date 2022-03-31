import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import database from "./src/utils/db";

const app = express();
const PORT = 5000;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

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
