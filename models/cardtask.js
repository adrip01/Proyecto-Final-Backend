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
      // define association here
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
