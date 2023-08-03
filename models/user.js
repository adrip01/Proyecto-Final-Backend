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
      //User {1} -- {n} Card
      User.hasMany(models.Card, {
        as: "card",
        foreignKey: "user_id", //foreignKey of Card
      });

      //User {1} -- {n} Task
      User.hasMany(models.Task, {
        as: "task",
        foreignKey: "user_id", //foreignKey of Task
      });

      //User {n} -- {1} Role
      User.belongsTo(models.Role, {
        as: "role",
        foreignKey: "role_id", // foreignKey of User
      });
    }
  }
  User.init(
    {
      role_id: DataTypes.INTEGER,
      user_name: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birthday: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
