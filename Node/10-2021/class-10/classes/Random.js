const randomFn = () => {
  // if (1 < 2) {
  //     //
  // } else {
  //     //
  // }
  return 1 < 2 ? true : false; // Ternary Operator - shortened if/ else
  return 1 < 2 && true; // Execute the second statement ONLY if the first is true

  // isAuthenticated && <> </>
};

const randomObj = {};

class Random {
  randomProp1 = 150;
  randomProp2 = 180;
  randomProp3 = false;
  constructor(randomProp1, randomProp2, randomProp3) {
    this.randomProp1 = randomProp1;
    this.randomProp2 = randomProp2;
    this.randomProp3 = randomProp3;
  }

  static getSomething() {
    return this.randomProp1 + this.randomProp2;
  }
}

class InheritedRandom extends Random {
  constructor() {
    super();
  }
}

Random.getSomething();

// fetch('http://localhost:8080/api/v1/authors', {
//     method: 'POST',
//     body: JSON.stringify('kdaksda'),
//     headers: {'Content-Type': 'application/json'}
// }).then(res => res.json()).then(finalRes => console.log(finalRes))

// axios.post(url, body).then((res) => {res.data})

// const something = require('something') // CommonJS/ RequireJS
// import something from something  // ES6 Modules

// const someArray = [1, 2, 3, false, true, { }, 'jj'];

// const mappedArray = someArray.map((element) => { return element + "9"})
// const filteredArray = someArray.filter((element) => element.id !== 5);
// const foundElmenet = someArray.find(element => element > 2)
// someArray.forEach(element => {
//     console.log(element);
// })

// const newArray = [...someArray, 'newElement']
