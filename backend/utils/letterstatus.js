class LetterStatus {
  static Correct = Symbol("Correct");
  static Misplaced = Symbol("Misplaced");
  static Absent = Symbol("Absent");

  constructor(name) {
    this.name = name;
  }
}

module.exports = LetterStatus;
