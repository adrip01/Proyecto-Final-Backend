"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cards", [
      {
        user_id: 2,
        type_id: 3,
        title: "title",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        type_id: 3,
        title: "title2",
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
