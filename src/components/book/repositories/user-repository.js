const models = require('../../../config').database;

exports.create = async (data) => {
  const author = await models.Author.create(data);
  return author;
};

exports.findById = async (id) => {
  const author = await models.Author.findById({ where: { id } });
  return author;
};

exports.findByName = async (name) => {
  const author = await models.Author.findOne({ where: { name } });
  return author;
};

exports.deleteById = async (id) => {
  const author = await models.Author.destroy({ where: { id } });
  return author;
};
