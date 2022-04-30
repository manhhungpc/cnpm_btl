import database from "../utils/db";
import { responseError } from "../const/app.const";

const Job = database.Model.jobModel;
const User = database.Model.userModel;

export const createJob = async (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).json(responseError("Yêu cầu tiêu đề công việc"));
  }

  if (!req.body.content) {
    return res.status(400).json(responseError("Yêu cầu mô tả công việc"));
  }

  if (!req.body.skill_required) {
    return res.status(400).json(responseError("Yêu cầu kỹ năng giúp đỡ"));
  }

  if (!req.body.contact) {
    return res.status(400).json(responseError("Cần có thông tin liên lạc"));
  }

  if (!req.body.time_required) {
    return res.status(400).json(responseError("Yêu cầu thời gian nhờ giúp đỡ"));
  }

  if (req.body.fee < 0) {
    return res.status(400).json(responseError("Mức lương trả không hợp lệ"));
  }

  if (!req.body.user_id) {
    return res.status(400).json(responseError("Phải có user_id"));
  }
  const user = await findUserById(req.body.user_id);
  if (!user) {
    return res.status(400).json(responseError("Người dùng không tồn tại"));
  }

  const job = await Job.findOne({
    where: {
      title: req.body.title,
    },
  });

  req.body = {
    title: req.body.title,
    content: req.body.content,
    skill_required: JSON.stringify(req.body.skill_required),
    area: req.body.area ? req.body.area : "Hà Nội",
    contact: req.body.contact,
    type: req.body.type ? req.body.type : 1,
    time_required: req.body.time_required,
    available: true,
    fee: req.body.fee ? req.body.fee : 0,
    user_id: req.body.user_id,
  };

  if (job) {
    return res
      .status(400)
      .json(responseError("Đã tồn tại công việc này. Vui lòng chọn 1 tiêu đề khác!"));
  }

  next();
};

export const updateJob = async (req, res, next) => {
  const job = await findJobById(req.params.id);
  const requestLength = Object.keys(req.body).length;
  const allow = Object.keys(req.body).find((key) => key === "notif");

  if (req.body.user_id !== job.user_id && requestLength > 2 && !allow) {
    return res.status(403).json(responseError("Không có quyền thay đổi"));
  }

  let arrNotif = [];
  if (job.notif) {
    arrNotif = JSON.parse(job.notif);
  }
  arrNotif.push(req.body.notif);
  req.body.notif = arrNotif;
  req.body.notif = JSON.stringify(req.body.notif);
  /* From User table
  notif:{
    id(user): UID,
    username: name,
    phone_number: 0123...
  } */

  //reformat data
  req.body = {
    title: req.body.title ? req.body.title : job.title,
    content: req.body.content ? req.body.contact : job.content,
    skill_required: req.body.skill_required
      ? JSON.stringify(req.body.skill_required)
      : job.skill_required,
    area: req.body.area ? req.body.area : job.area,
    contact: req.body.contact ? req.body.contact : job.contact,
    type: req.body.type ? req.body.type : job.type,
    time_required: req.body.time_required ? req.body.time_required : job.time_required,
    available: req.body.available ? req.available : job.available,
    fee: req.body.fee ? req.body.fee : job.fee,
    notif: req.body.notif,
    user_id: job.user_id,
  };

  next();
};

export const deleteJob = async (req, res, next) => {
  const job = await findJobById(req.params.id);
  if (req.body.user_id !== job.user_id) {
    return res.status(403).json(responseError("Không có quyền thay đổi"));
  }

  next();
};

const findJobById = async (id) => {
  return await Job.findOne({
    where: {
      id: id,
    },
  });
};

const findUserById = async (id) => {
  return await User.findOne({
    where: {
      id: id,
    },
  });
};
