const express = require('express');
const {
  validateUserMW,
  validateUserUpdateMW,
} = require('./middlewares/userMW');
const UserController = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app
  .route('/users')
  .get(UserController.getUsers)
  .post(validateUserMW, UserController.createUser);

app
  .route('/users/:userId')
  .get(UserController.getUser)
  .put(validateUserUpdateMW, UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = app;
