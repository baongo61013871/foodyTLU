"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.OrderDetail, {
        foreignKey: "productId",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      price: DataTypes.INTEGER,
      rating: DataTypes.STRING,
      time: DataTypes.STRING,
      description: DataTypes.TEXT,
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
