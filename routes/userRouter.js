const express = require('express');
const {
  validateUserMW,
  validateUserUpdateMW,
} = require('../middlewares/userMW');
const UserController = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter
  .route('/users')
  .get(UserController.getUsers)
  .post(validateUserMW, UserController.createUser);

userRouter
  .route('/users/:userId')
  .get(UserController.getUser)
  .put(validateUserUpdateMW, UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = userRouter;
