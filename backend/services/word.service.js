function wordOfDay(date) {
  return new Promise((resolve, reject) => {
    nowDate = new Date();
    if (
      nowDate.getYear() < date.getYear() ||
      nowDate.getMonth() < date.getMonth() ||
      nowDate.getDay() < date.getDay()
    ) {
      reject("Date should be today or in the past");
    }
    resolve("ABCDE");
  });
}

module.exports = { wordOfDay };
