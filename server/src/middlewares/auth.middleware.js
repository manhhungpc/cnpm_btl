import bcrypt from "bcrypt";
import database from "../utils/db";
import { validateEmail } from "../utils/validate";
import { responseError } from "../const/app.const";

const Users = database.Model.userModel;

export const login = async (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).json(responseError("Yêu cầu email!"));
  }

  if (!req.body.password) {
    return res.status(400).json(responseError("Yêu cầu mật khẩu!"));
  }

  const user = await findUserByEmail(req.body.email);

  if (!user) {
    return res.status(404).json(responseError("Người dùng không tồn tại"));
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).json(responseError("Mật khẩu không đúng"));
  }

  const formatData = {
    id: user.id,
    email: req.body.email,
    name: user.username,
  };
  req.body = formatData;

  next();
};

export const signup = async (req, res, next) => {
  if (!req.body.username) {
    return res.status(400).json(responseError("Yâu cầu tên người dùng"));
  }

  if (!req.body.email) {
    return res.status(400).json(responseError("Yêu cầu email!"));
  }
  if (!validateEmail(req.body.email)) {
    return res.status(400).json(responseError("Lỗi email không hợp lệ"));
  }

  if (!req.body.password) {
    return res.status(400).json(responseError("Yêu cầu mật khẩu!"));
  }

  if (!req.body.phone_number) {
    return res.status(400).json(responseError("Yêu cầu sđt"));
  }

  if (!req.body.address) {
    return res.status(400).json(responseError("Yêu cầu địa chỉ!"));
  }

  if (!req.body.skills) {
    return res.status(400).json(responseError("Yêu cầu ít nhất 1 kỹ năng!"));
  }

  const user = await findUserByEmail(req.body.email);
  console.log(user);

  if (user) {
    return res.status(400).json(responseError("Đã tồn tại người dùng"));
  }

  next();
};

const findUserByEmail = async (email) => {
  const user = await Users.findOne({
    where: {
      email: email,
    },
  });

  return user;
};
