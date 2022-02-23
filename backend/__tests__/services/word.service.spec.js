const wordRepository = require("../../repositories/word.repository");
jest.mock("../../repositories/word.repository");

const wordService = require("../../services/word.service");

describe("Provide words", () => {
  it("should provide a word of 5 capital letters", () => {
    // GIVEN
    const mockWord = {
      word: "ABCDE",
      date: "2022222",
    };
    const mockDate = new Date(2022, 1, 22);
    wordRepository.findByDate.mockResolvedValue([mockWord, true]);

    // WHEN
    actualWord = wordService.wordOfDay(mockDate);

    // THEN
    return expect(actualWord).resolves.toBe(mockWord.word);
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
