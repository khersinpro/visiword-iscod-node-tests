const { findByDate } = require("../repositories/word.repository");

function wordOfDay(date) {
  nowDate = new Date();
  if (futureDate(date)) {
    return new Promise((_, reject) =>
      reject("Date should be today or in the past")
    );
  } else {
    return findByDate(date).then(([data, created]) => data.word);
  }
}

function futureDate(date) {
  nowDate = new Date();
  return (
    nowDate.getYear() < date.getYear() ||
    nowDate.getMonth() < date.getMonth() ||
    nowDate.getDay() < date.getDay()
  );
}

module.exports = { wordOfDay };
