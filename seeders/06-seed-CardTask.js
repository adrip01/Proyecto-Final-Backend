"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cards_tasks", [
      {
        card_id: 1,
        task_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        card_id: 1,
        task_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        card_id: 2,
        task_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        card_id: 2,
        task_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        card_id: 3,
        task_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        card_id: 3,
        task_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
