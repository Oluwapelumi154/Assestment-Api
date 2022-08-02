module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('Author', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    authorId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  author.associate = (models) => {
    author.belongsToMany(models.Book, {
      through: models.AuthorBook,
      foreignKey: 'authorId',
      as: 'books'
    });
  };

  return author;
};
