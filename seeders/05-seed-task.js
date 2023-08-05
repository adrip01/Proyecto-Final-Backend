"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tasks", [
      {
        user_id: 2,
        description: "lavar los platos",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "fregar el piso",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "pasear al perro",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "dar de comer a los peces",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "comprar el pan",
        limit_date: null,
        limit_time: null,
        is_completed: "no",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        description: "comprar leche",
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
