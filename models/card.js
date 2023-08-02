"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //card {n} -- {1} User
      Card.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id", // foreignKey of User
      });

      //card {n} -- {1} Type
      Card.belongsTo(models.Type, {
        as: "type",
        foreignKey: "type_id", // foreignKey of Type
      });

      //card {n} -- {n} task
      Card.belongsToMany(models.Task, {
        through: "CardTask",
        as: "tasks",
        foreignKey: "card_id"
      })
    }
  }
  Card.init(
    {
      user_id: DataTypes.INTEGER,
      type_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Card",
      tableName: "cards",
    }
  );
  return Card;
};
