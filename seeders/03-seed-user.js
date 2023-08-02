"use strict";

const bcrypt = require("bcrypt");

const password = "12345678";
const encryptedPassword = bcrypt.hashSync(password, 10);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        role_id: 1, // admin
        first_name: "Admin",
        last_name: "Json",
        email: "admin@admin.com",
        password: encryptedPassword,
        birthday: "1996-05-01",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2, // user
        first_name: "Bob",
        last_name: "Bobson",
        email: "bob@bobson.com",
        password: encryptedPassword,
        birthday: "1996-05-01",
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
