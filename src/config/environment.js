const ENV = require('dotenv').config().parsed;

module.exports = {
  development: {
    username: ENV.DB_USERNAME,
    password: ENV.DB_PASSWORD,
    database: ENV.DB_NAME,
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT,
    logging: false
  },
  test: {
    username: ENV.DB_USERNAME,
    password: ENV.DB_PASSWORD,
    database: ENV.DB_NAME,
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT
  },
  production: {
    username: ENV.DB_USERNAME,
    password: ENV.DB_PASSWORD,
    database: ENV.DB_NAME,
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT
  }
};
