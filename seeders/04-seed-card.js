"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cards", [
      {
        user_id: 2,
        type_id: 4,
        title: "Home",
        category: "resettable",
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        type_id: 4,
        title: "Healthy",
        category: "resettable",
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        type_id: 4,
        title: "Self",
        category: "resettable",
        is_completed: "no",
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
