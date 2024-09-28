module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Users", "birth", {
        type: Sequelize.STRING,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Users", "birth", {
        type: Sequelize.DATE,
        allowNull: true,
      }),
    ]);
  },
};
