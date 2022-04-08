export const responseSuccess = (data) => {
  return {
    status: "ok",
    error: null,
    data: data,
  };
};

export const responseError = (err) => {
  return {
    status: "error",
    error: err,
    data: null,
  };
};
