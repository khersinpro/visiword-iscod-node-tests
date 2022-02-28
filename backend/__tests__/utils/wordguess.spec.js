const { guess } = require("../../utils/wordguess");
const LS = require("../../utils/letterstatus");

describe("Word guessing", () => {
  it("should return all-letter correct on correct word", () => {
    // GIVEN
    const actualWord = "MANGE";
    // WHEN
    const result = guess(actualWord, actualWord);
    // THEN
    expect(result).toStrictEqual([...actualWord].map((l) => LS.Correct));
  });

  it("should return absent for each letter from 'MANGE' with try 'PIVOT'", () => {
    // GIVEN
    const tryWord = "PIVOT";
    const actualWord = "MANGE";
    // WHEN
    const result = guess(tryWord, actualWord);
    // THEN
    expect(result).toStrictEqual([...actualWord].map((l) => LS.Absent));
  });

  it("should detect absent letters with try 'ROUGE'", () => {
    // GIVEN
    const tryWord = "ROUGE";
    const actualWord = "MANGE";
    // WHEN
    const result = guess(tryWord, actualWord);
    // THEN
    expect(result).toStrictEqual([
      LS.Absent,
      LS.Absent,
      LS.Absent,
      LS.Correct,
      LS.Correct,
    ]);
  });
  it("should detect misplaced letters with try 'NAUGE'", () => {
    // GIVEN
    const tryWord = "NAUGE";
    const actualWord = "MANGE";
    // WHEN
    const result = guess(tryWord, actualWord);
    // THEN
    expect(result).toStrictEqual([
      LS.Misplaced,
      LS.Correct,
      LS.Absent,
      LS.Correct,
      LS.Correct,
    ]);
  });
  it("should not detect a misplaced letter with try 'NANGE'", () => {
    // GIVEN
    const tryWord = "NANGE";
    const actualWord = "MANGE";
    // WHEN
    const result = guess(tryWord, actualWord);
    // THEN
    expect(result).toStrictEqual([
      LS.Absent,
      LS.Correct,
      LS.Correct,
      LS.Correct,
      LS.Correct,
    ]);
  });
});
