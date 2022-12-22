const express = require('express');
const rootRouter = require('./routes');
const { handleValidationError, handleErrors } = require('./errorHandlers');
const app = express();

app.use(express.json());
app.use('/api', rootRouter);

// app.use(handleValidationError);
app.use(handleValidationError, handleErrors);

module.exports = app;
