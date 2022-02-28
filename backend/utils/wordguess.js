const LS = require("./letterstatus");

function guess(tryWord, actualWord) {
  if (actualWord.length !== tryWord.length) {
    throw new Error("Words have different lengths");
  }
  let result = Array(tryWord.length);
  let corrects = [];
  for (let i = 0; i < tryWord.length; i++) {
    if (tryWord[i] === actualWord[i]) {
      result[i] = LS.Correct;
      corrects.push(tryWord[i]);
    } else if (actualWord.includes(tryWord[i])) {
      result[i] = LS.Misplaced;
    } else {
      result[i] = LS.Absent;
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === LS.Misplaced && corrects.includes(tryWord[i])) {
      result[i] = LS.Absent;
    }
  }

  return result;
}

module.exports = { guess };
