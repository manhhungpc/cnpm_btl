import jwt from "jsonwebtoken";
import Users from "../models/User.model";
import { responseError, responseSuccess } from "../const/app.const";

export const login = async (req, res) => {
  const payload = {
    id: req.body.id,
    name: req.body.username,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5d" });

  return res.status(200).json(responseSuccess({ token }));
};
