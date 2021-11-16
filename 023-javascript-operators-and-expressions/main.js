var width = 7;
var heigth = 4;
var area = width * heigth;
console.log(`value of area: ${area}`);
console.log(`type of area: ${typeof area}`);

var bill = 75;
var payment = 100;
var change = payment - bill;
console.log(`value of change: ${change}`);
console.log(`type of change: ${typeof change}`);

var quizzes = 95;
var midterm = 90;
var final = 100;
var grade = (quizzes + midterm + final) / 3;
console.log(`value of grade: ${grade}`);
console.log(`type of grade: ${typeof grade}`);

var firstName = 'Fernando';
var lastName = 'Figueiredo';
var fullName = `${firstName} ${lastName}`;
console.log(`value of fullName: ${fullName}`);
console.log(`type of fullName: ${typeof fullName}`);

var ph = 6;
var isAcidic = ph < 7;
console.log(`value of isAcidic: ${isAcidic}`);
console.log(`type of isAcidic: ${typeof isAcidic}`);

var headCount = 300;
var isSparta = headCount === 300;
console.log(`value of isSparta: ${isSparta}`);
console.log(`type of isSparta: ${typeof isSparta}`);

var motto = fullName;
motto = motto + ' is the GOAT';
console.log(`value of motto: ${motto}`);
console.log(`type of motto: ${typeof motto}`);
