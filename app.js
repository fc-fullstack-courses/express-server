const express = require('express');
const {
  validateUserMW,
  validateUserUpdateMW,
} = require('./middlewares/userMW');
const UserController = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/users', UserController.getUsers);
app.get('/users/:userId', UserController.getUser);
app.post('/users', validateUserMW, UserController.createUser);

app.delete('/users/:userId', UserController.deleteUser);
app.put('/users/:userId', validateUserUpdateMW, UserController.updateUser);
/*
app.post
app.put
app.patch
app.delete
*/

module.exports = app;
