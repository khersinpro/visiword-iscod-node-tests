const { Word } = require("../models");
const wordList = [
  "etait",
  "comme",
  "avait",
  "cette",
  "faire",
  "quand",
  "aussi",
  "temps",
  "alors",
  "leurs",
  "homme",
];

let index = 0;

function provideWord() {
  return wordList[index++].toUpperCase();
}

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

module.exports = { findById, findByDate };
