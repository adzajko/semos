class Random {
  randomVariable = 8;
  constructor() {}

  getValue() {
    return this.randomVariable;
  }
}

const newInstance = new Random();

class ExtendedRandom extends Random {}
