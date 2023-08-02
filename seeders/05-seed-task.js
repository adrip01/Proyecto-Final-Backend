"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tasks", [
      {
        user_id: 2,
        description: "descriptionhere",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "descriptionhere2",
        limit_date: null,
        limit_time: null,
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
