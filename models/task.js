"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //task {n} -- {1} User
      Task.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id", // foreignKey of User
      });

      //Task {n} -- {n} card
      Task.belongsToMany(models.Card, {
        through: "CardTask",
        as: "cards",
        foreignKey: "task_id",
      });
    }
  }
  Task.init(
    {
      user_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
      limit_date: DataTypes.DATE,
      limit_time: DataTypes.TIME,
      is_completed: DataTypes.ENUM("yes", "no"),
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
    }
  );
  return Task;
};
