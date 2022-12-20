const express = require('express');
const { validateUserMW } = require('./middlewares/userMW');

const app = express();

const PORT = 5000;

const usersDB = [];

app.get('/users', (req, res) => {
  res.send(usersDB);
});

const bodyParser = express.json();

app.post('/users', bodyParser, validateUserMW, async (req, res) => {
  const newUser = {
    ...req.body,
    id: Date.now(),
  };

  usersDB.push(newUser);

    res.send(newUser);
});

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
