"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tasks", [
      {
        user_id: 2,
        description: "lavar los platos",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "fregar el piso",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "pasear al perro",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "dar de comer a los peces",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "comprar el pan",
        target_timer: "no",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "comprar leche",
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
