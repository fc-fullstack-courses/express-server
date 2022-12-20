const express = require('express');
const yup = require('yup');
const app = express();

const PORT = 5000;

const usersDB = [];

app.get('/users', (req, res) => {
  res.send(usersDB);
});

const bodyParser = express.json();

const USER_CREATION_SCHEMA = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});

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
    console.log(req.body);
    console.log(usersDB);
    res.send('user created');
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
