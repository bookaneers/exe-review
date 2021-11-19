// 1
function getFirstChar(string) {
  return string.slice(0,1);
}
console.log(getFirstChar('LearningFuze'));
console.log(getFirstChar('paschal'));
console.log(getFirstChar('HTML'));
console.log(getFirstChar('code'));
console.log(getFirstChar('String'));

// 2
function getLastChar(string) {
  return string.slice(string.length-1)
}
console.log(getLastChar('LearningFuze'));
console.log(getLastChar('paschal'));
console.log(getLastChar('HTML'));
console.log(getLastChar('code'));
console.log(getLastChar('String'));

// 3
function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}
console.log(capitalize('a'));
console.log(capitalize('link'));
console.log(capitalize('tO'));
console.log(capitalize('ThE'));
console.log(capitalize('pAsT'));

// 4
function isUpperCased(word) {
  if (word === word.toUpperCase()) return true;
  return false;
}
console.log(isUpperCased('LearningFuze'));
console.log(isUpperCased('JavaScript'));
console.log(isUpperCased('HTML'));
console.log(isUpperCased('css'));
console.log(isUpperCased('PHP'));

// 5
function isLowerCased(word) {
  if (word === word.toLowerCase()) return true;
  return false;
}
console.log(isLowerCased('LearningFuze'));
console.log(isLowerCased('zip-ties'));
console.log(isLowerCased('JavaScript'));
console.log(isLowerCased('burgers'));
console.log(isLowerCased('HTML'));

// 6
function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' | char === 'o' | char === 'u') return true;
  if (char === 'A' || char === 'E' || char === 'I' | char === 'O' | char === 'U') return true;
  return false;
}
console.log(isVowel('L'));
console.log(isVowel('f'));
console.log(isVowel('Z'));
console.log(isVowel('a'));
console.log(isVowel('E'));
console.log(isVowel('I'));
console.log(isVowel('o'));
console.log(isVowel('u'));

// 7
function getWords(string) {
  return string.split(' ');
}
console.log(getWords('LearningFuze'));
console.log(getWords('Web Development'));
console.log(getWords('Cascading Style Sheets'));
console.log(getWords('European Computer Manufacturers Association'));
console.log(getWords(''));

// 8
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
console.log(reverseWord('foo'));
console.log(reverseWord('rab'));
console.log(reverseWord('LearningFuze'));
console.log(reverseWord('tpircSavaJ'));
console.log(reverseWord('racecar'));
