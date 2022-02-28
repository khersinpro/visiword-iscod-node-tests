const wordService = require("../services/word.service");

function todayWord(req, res, next) {
  wordService
    .wordOfDay(new Date())
    .then((word) => {
      res.status(200).json(word);
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
}

module.exports = { todayWord };
