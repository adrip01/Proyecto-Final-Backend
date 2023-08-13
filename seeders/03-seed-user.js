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
        user_name: "gatsu",
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
        user_name: "peepo2",
        first_name: "Bob",
        last_name: "Bobson",
        email: "bob@bobson.com",
        password: encryptedPassword,
        birthday: "1994-11-28",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "NZodd",
        first_name: "Marta",
        last_name: "Rivas",
        email: "marta@rivas.com",
        password: encryptedPassword,
        birthday: "1998-05-11",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "jsmith1987",
        email: "john@smith.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "aWhiteHorsee",
        email: "awhite@horsee.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "sgreenleaf",
        email: "sgreen@leaf.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "rbaker45",
        email: "rbaker@45.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "jlee88",
        email: "joe@lee.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "damagedBB",
        email: "bravo@thompson.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "SatAhn99",
        email: "samantha@1999.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "deathXXL",
        email: "diego@lopez.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "Xx_ChocoMint_xX",
        email: "robert@parker.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "LicourBuster",
        email: "john@martinelli.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "popcorn_lover99",
        email: "alex@clarkson.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "MrMMO",
        email: "mrmoo@2014.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "VHit",
        email: "viralhit@business.com",
        password: encryptedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_id: 2,
        user_name: "PianoMan",
        email: "pierre@lockhart.com",
        password: encryptedPassword,
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
