module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Authors', 'bookId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Book',
        key: 'id'
      }
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
