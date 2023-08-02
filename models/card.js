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
      // define association here
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
