import database from "../utils/db";
import { validateEmail, validateToken } from "../utils/validate";
import { responseError } from "../const/app.const";

const User = database.Model.userModel;

export const updateProfile = async (req, res, next) => {
  if (!req.body.username) {
    return res.json(responseError("Tên không được để trống"));
  }

  if (!req.body.email) {
    return res.status(400).json(responseError("Yêu cầu email"));
  }

  if (!validateEmail(req.body.email)) {
    return res.status(400).json(responseError("Email không hợp lệ"));
  }

  const userEmail = await User.findOne({ where: { email: req.body.email } });
  if (userEmail && userEmail.id !== req.params.id) {
    return res.status(400).json(responseError("Không cập nhật trùng email"));
  }

  const userPhoneNumber = await User.findOne({ where: { phone_number: req.body.phone_number } });
  if (userPhoneNumber && userPhoneNumber.id !== req.params.id) {
    return res.status(400).json(responseError("Không cập nhật trùng sđt"));
  }

  req.body.skills = JSON.stringify(req.body.skills);

  next();
};

export const deleteProfile = async (req, res, next) => {
  const id = req.params.id;

  const user = await User.findOne({ where: { id: id } });
  if (!user) {
    return res.status(400).json(responseError("Không tồn tại user"));
  }

  next();
};
