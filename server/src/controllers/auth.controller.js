import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import database from "../utils/db";
import { responseError, responseSuccess } from "../const/app.const";

const Users = database.Model.userModel;

export const login = async (req, res) => {
  const payload = {
    id: req.body.id,
    name: req.body.name,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5d" });

  return res.status(200).json(responseSuccess({ token }));
};

export const signup = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);

  req.body.password = hashPassword;
  req.body.skills = JSON.stringify(req.body.skills);
  req.body.votes = 0;

  const user = await Users.create({ ...req.body });

  const payload = {
    id: user.id,
    name: req.body.username,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5d" });

  return res.status(200).json(responseSuccess({ token }));
};
