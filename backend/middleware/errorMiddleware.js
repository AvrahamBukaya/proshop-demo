const notFound = (req, res, next) => {
  const error = new Error(`Not Found -${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = error.message;

  // Check for Mongoose bad ObjectId
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    message = `Rosource not found- The ID ${req.params.id} not exist`;
    statusCode = 404;
  }
  console.log(message);
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? 'prd' : error.stack,
  });
};

export { notFound, errorHandler };
