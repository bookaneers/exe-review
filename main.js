var colors = ['red', 'white', 'blue'];
console.log(`value of colors[0]: ${colors[0]}`);
console.log(`value of colors[1]: ${colors[1]}`);
console.log(`value of colors[2]: ${colors[2]}`);
console.log(`America is ${colors[0]}, ${colors[1]} e ${colors[2]}.`)
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]} e ${colors[2]}.`)
console.log('value of colors: ', colors);

var students = ['Jerry', 'George', 'Elaine', 'Kramer' ]
var numberOfStudents = students.length;
console.log(`there are ${numberOfStudents} students in the class.`);
var lastStudent = students[numberOfStudents - 1];
console.log(`The last student is ${lastStudent}.`);
console.log('value of students: ', students);
