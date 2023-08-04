"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cards_tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // user_id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "cards",
      //     key: "user_id",
      //   },
      // },
      card_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "cards",
          key: "id",
        },
      },
      task_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "tasks",
          key: "id",
        },
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
    await queryInterface.dropTable("cards_tasks");
  },
};
