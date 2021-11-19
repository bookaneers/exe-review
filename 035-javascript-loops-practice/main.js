// 1
function countdown(number) {
  var arrayNum = [];
  for (var i = number; i > 0; i--) {
    arrayNum.push(i);
  }
  return arrayNum;
}
console.log(countdown(10));

// 2
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i ++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumAll([100, 50, 2]));

// 3
function getIndexes(array) {
  var indexes = [];
  for (var i = 1; i <= array.length; i++) {
    indexes.push(i);
  }
  return indexes;
}
console.log(getIndexes(['meow', 'woof', 'squeak', 'shazoo']));

// 4
function addSuffixToAll(words, suffix) {
    var appended = [];
    for (var i = 0; i < words.length; i++) {
      appended.push(words[i] + suffix);
    }
    return appended;
}
console.log(addSuffixToAll(['equal', 'abnormal', 'civil'], 'ity'));

// 5
function getStudentNames(students) {
  var names = [];
  for (var i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}

var students = [
  { name: 'Shrek' },
  { name: 'Donkey' },
  { name: 'Fiona' }
];
console.log(getStudentNames(students));


// 6
function filterOutNulls(values) {
  var exceptNull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) exceptNull.push(values[i]);
  }
  return exceptNull;
}
console.log(filterOutNulls([7, 8, null, 9]));

// 7
function filterOutStrings(values) {
  numbersOnly = [];
  for (var i = 0; i < values.length; i++) {
    if (!isNaN(values[i])) numbersOnly.push(values[i]);
  }
  return numbersOnly;
}
console.log(filterOutStrings([1, 'a', 'b', 2, 3, 'c']));

// 8
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) return true;
  }
  return false;
}
console.log(includesSeven([77, 200, 700, '7']));

// 9
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}
console.log(findIndex([9, 8, 3], 4));

// 10
function oddOrEven(numbers) {
  var oddOrEven = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) oddOrEven.push('odd');
    else oddOrEven.push('even');
  }
  return oddOrEven;
}
console.log(oddOrEven([100, 121, 7]));
