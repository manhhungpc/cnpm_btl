import database from "../utils/db";
import { responseError, responseSuccess } from "../const/app.const";

const User = database.Model.userModel;

export const getUsers = async (req, res) => {
  const currentPage = req.query.page ? parseInt(req.query.page, 10) : 1;
  const size = req.query.size ? parseInt(req.query.size, 10) : 10;
  const offset = (currentPage - 1) * size;
  const order = req.query.order ? req.query.order : "ASC";
  const sortBy = req.query.sort ? req.query.sort : "username";

  const totalUser = await User.count();
  let totalPage = totalUser % size ? totalUser / size + 1 : totalUser / size;
  totalPage = Math.floor(totalPage);

  const data = await User.findAll({
    limit: size,
    offset: offset,
    order: [[sortBy, order]],
    attributes: { exclude: ["password"] },
  });

  const responseFormat = {
    status: "ok",
    error: null,
    totalUser,
    data,
    totalPage,
    currentPage,
  };

  return res.status(200).json(responseFormat);
};

export const updateProfile = async (req, res) => {
  const exclude = ["password", "votes"];
  const updateColumn = Object.keys(User.rawAttributes).filter((col) => !exclude.includes(col));

  await User.update(req.body, {
    where: {
      id: req.params.id,
    },
    fields: {
      updateColumn,
    },
  });

  const getUser = await findUserById(req.params.id, ["password", "votes"]);

  return res.status(200).json(responseSuccess(getUser));
};

export const deleteProfile = async (req, res) => {
  await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(responseSuccess("deleted user success"));
};

const findUserById = async (id, exclude) => {
  return await User.findOne({
    where: {
      id: id,
    },
    attributes: { exclude: exclude },
  });
};
