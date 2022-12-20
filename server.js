const express = require('express');
const { USER_CREATION_SCHEMA } = require('./utils/validationSchemas');

const app = express();

const PORT = 5000;

const usersDB = [];

app.get('/users', (req, res) => {
  res.send(usersDB);
});

const bodyParser = express.json();

app.post(
  '/users',
  bodyParser,
  async (req, res, next) => {
    try {
      await USER_CREATION_SCHEMA.validate(req.body);
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  async (req, res) => {
    const newUser = {
      ...req.body,
      id: Date.now(),
    };

    usersDB.push(newUser);

    res.send(newUser);
  }
);

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
