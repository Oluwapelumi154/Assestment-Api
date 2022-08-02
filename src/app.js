const express = require('express');

const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });
const logger = require('morgan');
const compression = require('compression');

const app = express();
app.use(express.json());
app.use(logger('dev'));
app.use(compression());
const api = require('./gateway');
const { errorResponseMsg } = require('./utils');

app.use('/api', api);
app.use('*', (req, res) => {
  return errorResponseMsg(
    res,
    'fail',
    404,
    `Can't find ${req.originalUrl} on this server`
  );
});
module.exports = app;
