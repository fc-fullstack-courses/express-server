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

// app.get('/users', UserController.getUsers);
// app.post('/users', validateUserMW, UserController.createUser);

app
  .route('/users/:userId')
  .get(UserController.getUser)
  .put(validateUserUpdateMW, UserController.updateUser)
  .delete(UserController.deleteUser);

// app.get('/users/:userId', UserController.getUser);
// app.delete('/users/:userId', UserController.deleteUser);
// app.put('/users/:userId', validateUserUpdateMW, UserController.updateUser);
/*
app.post
app.put
app.patch
app.delete
*/

module.exports = app;
