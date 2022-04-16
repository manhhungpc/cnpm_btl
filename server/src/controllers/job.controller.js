import database from "../utils/db";
import { responseSuccess } from "../const/app.const";

const Job = database.Model.jobModel;

export const getAllJobs = async (req, res) => {
  const currentPage = req.query.page ? parseInt(req.query.page, 10) : 1;
  const size = req.query.size ? parseInt(req.query.size, 10) : 10;
  const offset = (currentPage - 1) * size;
  const order = req.query.order ? req.query.order : "ASC";
  const sortBy = req.query.sort ? req.query.sort : "title";

  const totalJob = await Job.count();
  let totalPage = totalJob % size ? totalJob / size + 1 : totalJob / size;
  totalPage = Math.floor(totalPage);

  const data = await Job.findAll({
    limit: size,
    offset: offset,
    order: [[sortBy, order]],
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

export const createJob = async (req, res) => {
  const newJob = await Job.create({ ...req.body });

  const job = await findJobById(newJob.id);

  return res.status(200).json(responseSuccess(job));
};

export const updateJob = async (req, res) => {
  await Job.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  const jobUpdate = await findJobById(req.params.id);

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

const findJobById = async (id) => {
  return await Job.findOne({
    where: {
      id: id,
    },
  });
};
