import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = 5000;

dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
