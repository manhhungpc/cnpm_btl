import { Sequelize } from "sequelize";
import model from "../models/index.model";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL);

const database = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};

const Model = {
  userModel: model.Users(sequelize, Sequelize),
  jobModel: model.Jobs(sequelize, Sequelize),
  reviewModel: model.Reviews(sequelize, Sequelize),
};

database.Model = Model;

Model.jobModel.belongsTo(Model.userModel, { foreignKey: "user_id" });

Model.reviewModel.belongsTo(Model.userModel, { foreignKey: "user_id" });

export default database;
