"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tasks", [
      {
        user_id: 2,
        description: "Wash the dishes",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "Take out the trash",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "Go for a short walk",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "Do some stretches or light exercises",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "Read for at least 15 minutes",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "Call Mother",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "Check and respond to emails",
        target_timer: "no",
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
