const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const dotenv = require('dotenv');
dotenv.config({ path: '../../.env' });
const config = require(__dirname + '/environment.js')[env];
const componentsDir = path.join(__dirname, '../components');
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
const componentsSubdir = [];
const files = [];
const componentDir = fs.readdirSync(componentsDir);

componentDir.forEach((dir) => {
  const paths = path.join(__dirname, `../components/${dir}`);
  componentsSubdir.push(paths);
  return componentsSubdir;
});

componentsSubdir.forEach((dirpath) => {
  const dirs = fs.readdirSync(dirpath);
  const paths = path.join(dirpath, dirs[1]);
  const filenames = fs.readdirSync(paths);
  filenames.forEach((file) => {
    if (file.slice(-8) === 'model.js') {
      const filePath = path.join(paths, file);
      files.push(filePath);
    }
    return files;
  });
});

files.forEach((file) => {
  const model = require(file)(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
