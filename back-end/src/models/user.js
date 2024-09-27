"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order, {
        foreignKey: "userId",
        as: "orders", // Tên alias để sử dụng khi truy vấn
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      roleId: DataTypes.STRING,
      gender: DataTypes.STRING,
      birth: DataTypes.STRING,
      image: DataTypes.BLOB("long"),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
