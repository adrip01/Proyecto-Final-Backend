"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("types", [
      {
        type: "daily",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "weekly",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: "custom",
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
