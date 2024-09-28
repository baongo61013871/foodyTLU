"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("OrderDetails", "productId", {
      type: Sequelize.INTEGER,
      references: {
        model: "products", // Tên bảng liên kết
        key: "id", // Khóa chính trong bảng Users
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL", // Hoặc 'CASCADE' tùy theo nhu cầu
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("OrderDetails", "productId");
  },
};
