"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "types",
          key: "id",
        },
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      category: {
        allowNull: false,
        type: Sequelize.ENUM("resettable", "not_resettable"),
      },
      is_completed: {
        allowNull: false,
        type: Sequelize.ENUM("yes", "no"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cards");
  },
};
