const express = require('express');
const { validateUserMW } = require('./middlewares/userMW');
const UserController = require('./controllers/user.controller');

const app = express();

const PORT = 5000;

app.get('/users', UserController.getUsers);

const bodyParser = express.json();

app.post('/users', bodyParser, validateUserMW, UserController.createUser);

app.get('/test*', (req, res) => {
  res.send(`request.path is ${req.path} and request.method is ${req.method}`);
});

/*
app.post
app.put
app.patch
app.delete
*/

app.listen(PORT);
