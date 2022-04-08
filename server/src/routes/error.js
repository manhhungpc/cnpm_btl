export const notFound = (req, res) => {
  return res.status(404).json({
    id: "NotFoundError",
    status: "404",
    detail: "Request not found",
  });
};

export const serverError = (err, req, res, next) => {
  return res.status(500).json({
    id: "InternalServerError",
    status: "500",
    detail: err,
  });
};
