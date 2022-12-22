const express = require('express');
const { ValidationError } = require('yup');
const rootRouter = require('./routes');
const app = express();

app.use(express.json());
app.use('/api', rootRouter);

async function handleErrors(err, req, res, next) {
  res.status(500).send(err.message);
}

async function handleValidationError(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(400).send('Validation failed');
  }
  next(err);
}

// app.use(handleValidationError);
app.use(handleValidationError,handleErrors);

module.exports = app;
