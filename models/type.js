"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Type {1} -- {1..n} Cards
      Type.hasMany(models.Card, {
        as: "card",
        foreignKey: "spec_id", //foreignKey of Cards
      });
    }
  }
  Type.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Type",
      tableName: "types",
    }
  );
  return Type;
};
