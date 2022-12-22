const express = require('express');
const userRouter = require('./userRouter');
const rootRouter = express.Router();

rootRouter.use('/users', userRouter);

// router
//   .route('/cars')
//   .get(UserController.getUsers)
//   .post(validateUserMW, UserController.createUser);

// router
//   .route('/cars/:carId')
//   .get(UserController.getUser)
//   .put(validateUserUpdateMW, UserController.updateUser)
//   .delete(UserController.deleteUser);

module.exports = rootRouter;
