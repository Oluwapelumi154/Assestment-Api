require('dotenv').config({ path: '../.env' });

const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const { errorResponseMsg } = require('./utils');

const app = express();
app.use(express.json());
app.use(logger('dev'));
app.use(compression());
const api = require('./gateway');

app.use('/api', api);
app.use('*', (req, res) =>
  errorResponseMsg(
    res,
    'fail',
    404,
    `Can't find ${req.originalUrl} on this server`
  )
);
module.exports = app;
