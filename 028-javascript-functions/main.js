
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
var minutesToSeconds = convertMinutesToSeconds(60);
console.log(`convertMinutesToSeconds: ${minutesToSeconds}`);

function greet(name) {
  return `Hey ${name}`;
}
var greetResult = greet('Fernando');
console.log(`greet: ${greetResult}`);

function getArea(width, height) {
  return (width * height);
}
var getAreaResult = getArea(17,42);
console.log(`getArea: ${getAreaResult}`);

function getFirstName(person) {
  return person.firstName;
}
var firstName = getFirstName({ firstName: 'Fernando', lastName: 'Figueiredo' });
console.log(`getFirstName: ${firstName}`);

function getLastElement(array) {
  return array[array.length - 1];
}
var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(`getLastElement: ${lastElement}`);
