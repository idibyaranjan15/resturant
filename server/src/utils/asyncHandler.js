const asyncHandler = (requestHandler) => (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error));
};
export default asyncHandler;
// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//     await func(req, res, next);
//   } catch (error) {
//     res.status(500).json({
//       success: false, // Changed to false to indicate failure
//       message: error.message,
//     });
//   }
// };
