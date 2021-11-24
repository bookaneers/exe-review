// 1
function isPalindromic(string) {
  string = string.replaceAll(' ', '');
  for (let i = 0; i < string.length/2; i++) {
    if (string[i] !== string[string.length - i - 1]) return false;
  }
  return true;
}
console.log(isPalindromic("bob"));
console.log(isPalindromic("alice"));
console.log(isPalindromic("racecar"));
console.log(isPalindromic("rasecar"));
console.log(isPalindromic("taco cat"));
console.log(isPalindromic("sam i am"));

// 2
function isAnagram(firstString, secondString) {
  firstString = firstString.replaceAll(' ', '');
  secondString = secondString.replaceAll(' ', '');
  if (firstString.length !== secondString.length) return false;
  for (let i = 0; i < secondString.length; i++) {
    if (!firstString.includes(secondString[i])) return false;
  }
  return true;
}
console.log(isAnagram('restful', 'fluster'));
console.log(isAnagram('dormitory', 'dirty room'));
console.log(isAnagram('roses', 'horse'));
console.log(isAnagram('debit card', 'bad credit'));
console.log(isAnagram('nearby there', 'nearly three'));
console.log(isAnagram('school master', 'the classroom'));
console.log(isAnagram('ludicrous', 'ridiculous'));
console.log(isAnagram('anagram', 'nag a ram'));

// 3
function reverseWords(string) {
  const array = string.split(' ');
  let item = '';
  let reversedItem = '';
  for (let i = 0; i < array.length; i++) {
    item = array[0];
    for (let k = item.length - 1; k >= 0; k--) {
      reversedItem = reversedItem + item[k]
    }
    array.shift();
    array.push(reversedItem);
    reversedItem = '';
  }
  string = array.join(' ');
  return string;
}
console.log(reverseWords('All Code All Day'));
console.log(reverseWords('What is unit testing?'));
console.log(reverseWords('follow your passion'));
console.log(reverseWords('Hello, how are you?'));

// 4
function titleCase(string) {
  // create array of special words
  var specialWords = ['and', 'or', 'nor', 'but', 'the', 'a', 'an', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  // create array of words from the given string
  var array = string.split(' ');
  // create variables
  var word = '';
  var colonFlag = 0;
  var hyphenLocation = 0;
  // iterate over array of words
  for (var i = 0; i < array.length; i++) {
    // input array elements in a string variable
    word = array[i].toString();
    // EGDE CASES:
    if (word.charAt(word.length - 1) === ':') {
      word = word.substring(0, word.length - 1);
      colonFlag = 2;
    }
    if (word.toLowerCase() === 'javascript') {
      word = 'JavaScript';
      if (colonFlag === 2) {
        word = word + ':';
      }
    }
    if (word === 'api') {
      word = 'API';
    }
    if (word.includes('-')) {
      hyphenLocation = word.indexOf('-');
      word = word.substring(0, hyphenLocation + 1) +
        word[hyphenLocation + 1].toUpperCase() +
        word.substring(hyphenLocation + 2);
    }
    if (!specialWords.includes(word) || colonFlag > 0) {
      word = word[0].toUpperCase() + word.substring(1);
      colonFlag--;
    }
    // input string back to array element
    array[i] = word;

  }
  // return array of words
  return array.join(' ');
}

console.log(titleCase('composing software'));
console.log(titleCase('high performance browser networking'));
console.log(titleCase('node.js in action'))
console.log(titleCase('professional JavaScript for web developers'));
console.log(titleCase('secrets of the javascript ninja'));
console.log(titleCase('web audio api'));
console.log(titleCase('javascript: the definitive guide'));
console.log(titleCase('speaking Javascript: an in-depth guide for programmers'));




console.log();
console.log();
console.log();
console.log()

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log()

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log()
