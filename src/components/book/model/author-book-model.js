module.exports = (sequelize, DataTypes) => {
  const authorBook = sequelize.define('AuthorBook', {
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Author',
        key: 'id'
      },
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Book',
          key: 'id'
        }
      }
    }
  });
  return authorBook;
};
