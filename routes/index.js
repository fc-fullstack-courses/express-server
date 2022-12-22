const express = require('express');
const {
  validateUserMW,
  validateUserUpdateMW,
} = require('../middlewares/userMW');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router
  .route('/users')
  .get(UserController.getUsers)
  .post(validateUserMW, UserController.createUser);

router
  .route('/users/:userId')
  .get(UserController.getUser)
  .put(validateUserUpdateMW, UserController.updateUser)
  .delete(UserController.deleteUser);

router
  .route('/cars')
  .get(UserController.getUsers)
  .post(validateUserMW, UserController.createUser);

router
  .route('/cars/:carId')
  .get(UserController.getUser)
  .put(validateUserUpdateMW, UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;
