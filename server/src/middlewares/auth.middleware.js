import bcrypt from "bcrypt";
import database from "../utils/db";
import { responseError } from "../const/app.const";

const Users = database.Model.userModel;

export const login = async (req, res, next) => {
  if (!req.body.email) {
    res.status(400).json(responseError("Yêu cầu email!"));
  }

  if (!req.body.password) {
    res.status(400).json(responseError("Yêu cầu mật khẩu!"));
  }

  const user = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    res.status(404).json(responseError("Người dùng không tồn tại"));
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    res.status(400).json(responseError("Mật khẩu không đúng"));
  }

  const formatData = {
    id: user.id,
    email: req.body.email,
    name: user.username,
  };
  req.body = formatData;

  next();
};
