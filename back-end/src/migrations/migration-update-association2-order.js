"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Orders", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Users", // Tên bảng liên kết
        key: "id", // Khóa chính trong bảng Users
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL", // Hoặc 'CASCADE' tùy theo nhu cầu
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Orders", "userId");
  },
};
