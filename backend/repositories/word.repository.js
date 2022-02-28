const fs = require("fs");
const path = require("path");

const { Word } = require("../models");
const wordList = loadWordsSync();

function findById(id) {
  return Word.findByPk(id)
    .then((word) => {
      return word;
    })
    .catch((err) => {
      console.log(">> Error while finding word: ", err);
    });
}

function findByDate(date) {
  dayString = dateToString(date);
  return Word.findOrCreate({
    where: { date: dayString },
    defaults: {
      word: provideWord(),
    },
  })
    .then((word) => {
      return word;
    })
    .catch((err) => {
      console.log(">> Error while finding word: ", err);
    });
}

function dateToString(date) {
  return `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
}

function loadWordsSync() {
  return fs
    .readFileSync(path.resolve(__dirname, "../config/mots_5.txt"))
    .toString()
    .split("\n");
}

function provideWord() {
  let randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex].toUpperCase();
}

module.exports = { findById, findByDate };
