const wordService = require("../../services/word.service.js");

describe("Provide words", () => {
  it("should provide a word of 5 capital letters", () => {
    // GIVEN
    // WHEN
    actualWord = wordService.wordOfDay(new Date());

    // THEN
    return expect(actualWord).resolves.toMatch(/[A-Z]{5}/);
  });

  it("should throw an error if the date is in the future", () => {
    // GIVEN
    futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);

    // WHEN
    actualResult = wordService.wordOfDay(futureDate);

    // THEN
    return expect(actualResult).rejects.not.toBeFalsy();
  });
});
