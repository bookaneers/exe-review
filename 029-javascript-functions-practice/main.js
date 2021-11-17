// 1
function getAverageOfTwoNumbers(x, y) {
  return (x + y) / 2;
}
console.log(getAverageOfTwoNumbers(10, 12));

// 2
function getAverageOfThreeNumbers(x, y, z) {
  return (x + y + z) / 3;
}
console.log(getAverageOfThreeNumbers(10, 12, 14));

// 3
function getRightTriangleArea(base, height) {
  return (base * height) / 2;
}
console.log(getRightTriangleArea(10, 20))

// 4
function getSquareOfNumber(number) {
  return number * number;
}
console.log(getSquareOfNumber(5));

// 5
function getSumOfSquares(x, y) {
  return (x * x) + (y * y);
}
console.log(getSumOfSquares(5, 4))

// 6
function getAreaOfCircle(radius) {
  return Math.PI * (radius * radius);
}
console.log(getAreaOfCircle(5));

// 7
function getFirstElement(array) {
  return array[0];
}
console.log(getFirstElement([4, 3, 2, 1]));

// 8
function getSecondElement(array) {
  return array[1];
}
console.log(getSecondElement([4, 3, 2, 1]));

// 9
function getElementAtIndex(array, index) {
  return array[index];
}
console.log(getElementAtIndex(['i', 'tell', 'you', 'what'], 2));

// 10
function getLengthOfArray(array) {
  return array.length;
}
console.log(getLengthOfArray(['i', 'tell', 'you', 'what']));

// 11
function getLastElement(array) {
  return array[array.length - 1];
}
console.log(getLastElement(['i', 'tell', 'you', 'what']));

// 12
function getFirstCharacter(string) {
  return string.charAt(0);
}
console.log(getFirstCharacter('he who shall not be named'));

// 13
function getSecondCharacter(string) {
  return string.substring(1,2);
}
console.log(getSecondCharacter('he who shall not be named'));

// 14
function getCharacterAtIndex(string, index) {
  return string.slice(index, index +1);
}
console.log(getCharacterAtIndex('he who shall not be named', 17));

// 15
function getLengthOfString(string) {
  return string.length;
}
console.log(getLengthOfString('he who shall not be named'));

// 16
function getLastCharacter(string) {
  return string.slice(string.length - 1);
}
console.log(getLastCharacter('he who shall not be named'));

// 17
function getLastNameOfPerson(person) {
  return person.lastName;
}
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};
console.log(getLastNameOfPerson(lea));

// 18
function getFullNameOfPerson(person) {
  return `${person.firstName} ${person.lastName}`;
}
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};
console.log(getFullNameOfPerson(lea));

// 19
function getDescriptionOfPerson(person) {
  return `${person.name} is a(n) ${person.occupation} from ${person.birthPlace}`;
}
var lea = {
  name: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos, Greece'
};
console.log(getDescriptionOfPerson(lea));
var tim = {
  name: 'Tim Berners-Lee',
  occupation: 'computer scientist',
  birthPlace: 'London, England'
};
console.log(getDescriptionOfPerson(tim));

// 20
function getFirstInitialOfPerson(person) {
  return person.firstName.charAt(0);
}
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};
console.log(getFirstInitialOfPerson(lea));

// 21
function getInitialsOfPerson(person) {
  return `${person.firstName.charAt(0)}${person.lastName.charAt(0)}`;
}
var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};
console.log(getInitialsOfPerson(lea));

// 22
function getPropertyValue(object, key) {
  return object[key];
}
var lea = {
  name: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos, Greece'
};
console.log(getPropertyValue(lea, 'occupation'));
