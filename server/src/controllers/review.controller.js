import database from "../utils/db";
import { responseSuccess } from "../const/app.const";

const Review = database.Model.reviewModel;
const User = database.Model.userModel;

export const getReviewByJobId = async (req, res) => {
  const reviews = await Review.findAll({
    where: {
      target: "job " + req.params.job_id,
    },
    include: {
      model: User,
      attributes: ["username"],
    },
  });

  return res.status(200).json(responseSuccess(reviews));
};

export const getReviewByUserId = async (req, res) => {
  const reviews = await Review.findAll({
    where: {
      target: "user " + req.params.target_user_id,
    },
    include: {
      model: User,
      attributes: ["username"],
    },
  });

  return res.status(200).json(responseSuccess(reviews));
};

export const newJobReview = async (req, res) => {
  const newReview = await Review.create({ ...req.body });

  const review = await Review.findOne({ where: { id: newReview.id } });

  return res.status(200).json(responseSuccess(review));
};

export const newUserReview = async (req, res) => {
  const newReview = await Review.create({ ...req.body });

  const review = await Review.findOne({ where: { id: newReview.id } });

  return res.status(200).json(responseSuccess(review));
};

export const deleteReview = async (req, res) => {
  await Review.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.status(200).json(responseSuccess("Đã xóa thành công"));
};
