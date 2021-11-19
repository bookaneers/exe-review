// 1
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen());

// 2
function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber+=2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());

// 3
function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('hello', 5))

// 4
function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
logEachCharacter('FERNANDO');

// 5
function doubleAll(numbers) {
  var double = [];
  for (var i = 0; i < numbers.length; i++) {
    double.push(numbers[i] * 2);
  }
  return double;
}
var arrayNumbers = [10, 20, 30];
console.log(doubleAll(arrayNumbers));

// 6
function getKeys(object) {
  var keys = [];
  for (key in object) {
    keys.push(key);
  }
  return keys;
}

// 7
function getValues(object) {
  var values = [];
  for (key in object) {
    values.push(object[key]);
  }
  return values;
}
var myCar = {
  made: 'Chevy',
  model: 'Silverado',
  year: 2008
}
console.log(getKeys(myCar));
console.log(getValues(myCar));
