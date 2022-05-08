import database from "../utils/db";
import { responseSuccess } from "../const/app.const";
import { Op } from "sequelize";

const Job = database.Model.jobModel;
const User = database.Model.userModel;

export const getAllJobs = async (req, res) => {
  const currentPage = req.query.page ? parseInt(req.query.page, 10) : 1;
  const size = req.query.size ? parseInt(req.query.size, 10) : 10;
  const offset = (currentPage - 1) * size;
  const order = req.query.order ? req.query.order : "ASC";
  const sortBy = req.query.sort ? req.query.sort : "title";
  const search = req.query.search ? req.query.search : "";

  const totalJob = await Job.count();
  let totalPage = totalJob % size ? totalJob / size + 1 : totalJob / size;
  totalPage = Math.floor(totalPage);

  const data = await Job.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Op.like]: "%" + search + "%",
          },
        },
        {
          area: {
            [Op.like]: "%" + search + "%",
          },
        },
      ],
    },
    limit: size,
    offset: offset,
    order: [[sortBy, order]],
    include: {
      model: User,
      attributes: ["username"],
    },
  });

  const responseFormat = {
    status: "ok",
    error: null,
    totalJob,
    data,
    totalPage,
    currentPage,
  };

  return res.status(200).json(responseFormat);
};

export const getJobById = async (req, res) => {
  const data = await findJobById(req.params.id, ["username", "email"]);

  return res.status(200).json(responseSuccess(data));
};

export const getJobByUserId = async (req, res) => {
  const data = await Job.findAll({
    where: {
      user_id: req.params.user_id,
    },
    include: {
      model: User,
      attributes: ["username", "email"],
    },
  });

  return res.status(200).json(responseSuccess(data));
};

export const createJob = async (req, res) => {
  const newJob = await Job.create({ ...req.body });

  const job = await findJobById(newJob.id);

  return res.status(200).json(responseSuccess(job));
};

export const updateJob = async (req, res) => {
  const exclude = ["time_required"];
  const updateColumn = Object.keys(User.rawAttributes).filter((col) => !exclude.includes(col));

  await Job.update(req.body, {
    where: {
      id: req.params.id,
    },
    fields: {
      updateColumn,
    },
  });

  const jobUpdate = await findJobById(req.params.id);
  jobUpdate.notif = JSON.parse(jobUpdate.notif);

  return res.status(200).json(responseSuccess(jobUpdate));
};

export const deleteJob = async (req, res) => {
  await Job.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(responseSuccess("Đã xóa"));
};

const findJobById = async (id, attributes) => {
  return await Job.findOne({
    where: {
      id: id,
    },
    include: {
      model: User,
      attributes: attributes,
    },
  });
};
