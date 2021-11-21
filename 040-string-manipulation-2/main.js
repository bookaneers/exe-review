// 1
function truncate(length, string) {
   return string.slice(0, length) + '...';
}
console.log(truncate(8, 'All Code All Day'));
console.log(truncate(15, 'HTML, CSS, JavaScript, React'));
console.log(truncate(1, 'React'));
console.log(truncate(3, 'Angular'));
console.log(truncate(5, ''));
console.log(truncate(20, 'LearningFuze'));

// 2
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
console.log(capitalizeWord('broKeN'));
console.log(capitalizeWord('sEarCHinG'));
console.log(capitalizeWord('quEStiOn'));
console.log(capitalizeWord('tHoUghTfUl'));
console.log(capitalizeWord('jaVAsCrIPt'));
console.log(capitalizeWord('javaScript'));
console.log(capitalizeWord('JavascRipt'));

// 3
function ransomCase(string) {
  var array = string.split('');
  string = '';
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) string = string + array[i].toLowerCase();
    if (i % 2 === 1) string = string + array[i].toUpperCase();
  }
  return string;
}
console.log(ransomCase('foo'));
console.log(ransomCase('QUUX'));
console.log(ransomCase('WaldO'));
console.log(ransomCase('JavaScript'));
console.log(ransomCase('LearningFuze'));

// 4
function capitalizeWords(string) {
  const array = string.split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
  }
  string = array.join(' ');
  return string;
}
console.log(capitalizeWords('neEds soluTion'));
console.log(capitalizeWords('Add string manipulation practice.'));
console.log(capitalizeWords('aLl CoDe aLl DaY'));
console.log(capitalizeWords('HTML, CSS, JavaScript, PHP, SQL'));

// 5
function numVowels(string) {
  string = string.toLowerCase();
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i'
    || string[i] === 'o' || string[i] === 'u') count++;
  }
  return count;
}
console.log(numVowels('All Code All Day'));
console.log(numVowels('HTML, CSS, JavaScript, React'));
console.log(numVowels('React'));
console.log(numVowels('Angular'));
console.log(numVowels(''));
console.log(numVowels('LearningFuze'));

// 6
function firstChars(length, string) {
  return string.slice(0, length);
}
console.log(firstChars(8, 'All Code All Day'));
console.log(firstChars(15, 'HTML, CSS, JavaScript, React'));
console.log(firstChars(1, 'React'));
console.log(firstChars(3, 'Angular'));
console.log(firstChars(5, ''));
console.log(firstChars(20, 'LearningFuze'));

// 7
function lastChars(length, string) {
  if (length > string.length) return string;
  return string.slice(string.length - length);
}
console.log(lastChars(8, 'All Code All Day'));
console.log(lastChars(15, 'HTML, CSS, JavaScript, React'));
console.log(lastChars(1, 'React'));
console.log(lastChars(3, 'Angular'));
console.log(lastChars(5, ''));
console.log(lastChars(20, 'LearningFuze'));

// 8
function swapChars(firstIndex, secondIndex, string) {
  const array = string.split('');
  let char = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = char;
  return array.join('');
}
console.log(swapChars(0, 1, 'lodash'));
console.log(swapChars(0, 4, 'React'));
console.log(swapChars(6, 7, 'complete'));
console.log(swapChars(0, 8, 'LearningFuze'));
console.log(swapChars(11, 23, 'HTML, CSS, JavaScript, React'));
