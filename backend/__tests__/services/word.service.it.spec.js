/**
 * @group integration
 */
const { sequelize } = require("../../models/index.js");
const dataset = require("../../seeders/20220222170843-demo-word");
const wordService = require("../../services/word.service.js");

const db = require("../../models");

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

  beforeEach(() => {
    return dataset.up(db.sequelize.getQueryInterface(), db.Sequelize);
  });

  afterEach(() => {
    return dataset.down(db.sequelize.getQueryInterface(), db.Sequelize);
  });

  afterAll(() => {
    return sequelize.close();
  });
});
