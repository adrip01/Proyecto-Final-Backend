"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CardTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CardTask.belongsTo(models.Card, {
        as: "cards",
        foreignKey: "card_id",
      });
      CardTask.belongsTo(models.Task, {
        as: "tasks",
        foreignKey: "task_id",
      });
    }
  }
  CardTask.init(
    {
      card_id: DataTypes.INTEGER,
      task_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CardTask",
      tableName: "cards_tasks",
    }
  );
  return CardTask;
};
