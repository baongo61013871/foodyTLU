"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.hasMany(models.OrderDetail, {
        foreignKey: "orderId",
        as: "orderDetails",
      });
      Order.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user", // Tên alias để sử dụng khi truy vấn
      });
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
      },
      paymentMethod: {
        type: DataTypes.STRING,
      },
      shippingAddress: {
        type: DataTypes.TEXT,
      },

      status: {
        type: DataTypes.STRING,
      },
      orderDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
