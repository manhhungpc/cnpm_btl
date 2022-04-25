import database from "../utils/db";
import { validateEmail, validateToken } from "../utils/validate";
import { responseError } from "../const/app.const";

const Review = database.Model.reviewModel;
const Job = database.Model.jobModel;
const User = database.Model.userModel;

export const getReviewByJobId = async (req, res, next) => {
  const reviews = await Review.findAll({
    where: {
      target: "job " + req.params.job_id,
    },
  });

  if (!reviews) {
    return res.status(400).json(responseError("Không có bình luận về phần này"));
  }

  next();
};

export const getReviewByUserId = async (req, res, next) => {
  const reviews = await Review.findAll({
    where: {
      target: "user " + req.params.target_user_id,
    },
  });

  if (!reviews) {
    return res.status(400).json(responseError("Không có bình luận về phần này"));
  }

  next();
};

export const newJobReview = async (req, res, next) => {
  if (!req.body.target) {
    return res.status(400).json(responseError("Thiếu id việc làm"));
  }

  const jobId = req.body.target.split(" ")[1];
  if (jobId != req.params.job_id) {
    return res.status(400).json(responseError("Id việc làm không khớp"));
  }

  const job = await Job.findOne({
    where: {
      id: jobId,
    },
  });

  const user = await findUserById(req.body.user_id);

  if (!user) {
    return res.status(400).json(responseError("Id của bạn không hợp lệ"));
  }

  if (!job) {
    return res.status(400).json(responseError("Không tồn tại công việc này"));
  }

  if (!req.body.review) {
    return res.status(400).json(responseError("Yêu cầu phải có đánh giá"));
  }

  delete req.body.id;
  next();
};

export const newUserReview = async (req, res, next) => {
  if (!req.body.target) {
    return res.status(400).json(responseError("Thiếu id người dùng"));
  }

  const targetUser = req.body.target.split(" ")[1];
  if (targetUser != req.params.target_user_id) {
    return res.status(400).json(responseError("Id người dùng được đánh giá không khớp"));
  }

  const user = await findUserById(req.body.user_id);
  const reviewUser = await findUserById(targetUser);

  if (user.id == reviewUser.id) {
    return res.status(400).json(responseError("Bạn không thể tự đánh giá mình"));
  }

  if (!reviewUser) {
    return res.status(400).json(responseError("Người dùng mà bạn đánh giá không tồn tại"));
  }

  if (!user) {
    return res.status(400).json(responseError("Id của bạn không hợp lệ"));
  }

  if (!req.body.review) {
    return res.status(400).json(responseError("Yêu cầu phải có đánh giá"));
  }

  delete req.body.id;
  next();
};

export const deleteReview = async (req, res, next) => {
  const review = await Review.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!review) {
    return res.status(400).json(responseError("Không tồn tại review này"));
  }

  console.log(review, review.id);
  if (req.body.user_id != review.user_id) {
    return res.status(400).json(responseError("Bạn không có quyền xóa đánh giá này"));
  }

  next();
};

const findUserById = async (id) => {
  return await User.findOne({
    where: {
      id: id,
    },
  });
};
