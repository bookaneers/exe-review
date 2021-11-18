// 1
function isUnderFive(number) {
  return (number < 5) ? true : false;
}
console.log(isUnderFive(3));
console.log(isUnderFive(6));

// 2
function isEven(number) {
  return (number % 2 === 1) ? true : false;
}
console.log(isEven(4));
console.log(isEven(7));

// 3
function startsWithJ(string) {
  return (string.charAt(0).toUpperCase() === 'J') ? true : false;
}
console.log(startsWithJ('JavaScript'));
console.log(startsWithJ('Elvis'));

// 4
function isOldEnoughToDrink(person) {
  return (person.age >= 21) ? true : false;
}
var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
console.log(isOldEnoughToDrink(bart));
var fernando = {
  name: 'Fernando Figueiredo',
  age: 51
};
console.log(isOldEnoughToDrink(fernando));

// 5
function isOldEnoughToDrive(person) {
  return (person.age >= 16) ? true : false;
}
var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
console.log(isOldEnoughToDrive(homer));
var fernando = {
  name: 'Fernando Figueiredo',
  age: 51
};
console.log(isOldEnoughToDrive(fernando));

// 6
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

// 7
function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) return 'acid';
  if (pH === 7) return 'neutral';
  if (pH > 7 && pH <= 14) return 'base';
  return 'invalid pH level';
}
console.log(categorizeAcidity(-1));
console.log(categorizeAcidity(14.01));
console.log(categorizeAcidity(3));
console.log(categorizeAcidity(7));
console.log(categorizeAcidity(11));

// 8
function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') return 'We\'re the Warner Brothers';
  if (name === 'dot') return 'I\'m cute~';
  return 'Goodnight everybody';
}
console.log(introduceWarnerBro('yakko'));
console.log(introduceWarnerBro('dot'));
console.log(introduceWarnerBro('Fernando'));
