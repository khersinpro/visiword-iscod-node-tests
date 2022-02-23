const { findByDate } = require("../repositories/word.repository");

function wordOfDay(date) {
  nowDate = new Date();
  if (futureDate(date) || before2022(date)) {
    return new Promise((_, reject) =>
      reject("Date should be today or in the past after 2022-01-01")
    );
  } else {
    return findByDate(date).then(([data, created]) => data.word);
  }
}

function futureDate(date) {
  nowDate = new Date();
  if (nowDate < date) {
    return (
      nowDate.getFullYear() !== date.getFullYear() ||
      nowDate.getMonth() !== date.getMonth() ||
      nowDate.getDay() !== date.getDay()
    );
  }
  return false;
}

function before2022(date) {
  return date.getFullYear() < 2022;
}

module.exports = { wordOfDay };
