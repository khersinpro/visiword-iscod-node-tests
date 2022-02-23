"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Words", [
      {
        date: "20220201",
        word: "AVION",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "20220202",
        word: "FINIE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "20220203",
        word: "TARIE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "20220204",
        word: "GAGNE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "20220205",
        word: "TOUTE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "20220206",
        word: "CLORE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "20220207",
        word: "POMME",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "20220208",
        word: "POIRE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "20220209",
        word: "PECHE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        date: "20220210",
        word: "MATIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Words", null, {});
  },
};
