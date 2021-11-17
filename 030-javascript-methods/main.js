// The Math Object
var num1 = 100;
var num2 = 150;
var num3 = 175;
var maximumValue = Math.max(num1, num2, num3);
console.log(maximumValue);

var heroes = ['superman', 'batman', 'zorro', 'black widow'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('The value of randomIndex is ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('The value of randomHero is ', randomHero);

// The Array Method
var library = [
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke'
  },
  {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford'
  },
  {
    title: 'JavaScript Patterns',
    author: 'Stoyan Stefanov'
  }];

console.log(library);

var lastBook = library.pop();
console.log(lastBook);
var firstBook = library.shift();
console.log(firstBook);

console.log(library);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

library.push(js);
library.unshift(css);
library.splice(1,1);

console.log(library);

// The String Method

var fullName = 'Fernando Figueiredo';
var firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);

var firstName = firstAndLastName[0];
var sayMayName = firstName.toUpperCase();
console.log(sayMayName);
