const notFound = (_req, _res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  return next(error);
};

const errorHandler = {
  notFound,
};
module.exports = errorHandler;
