var student = {
  firstName: 'Fernando',
  lastName: 'Figueiredo',
  age: 51
}
var fullName = `${student.firstName} ${student.lastName}`;
console.log(`value of fullName: ${fullName}`);
student['livesInIrvine'] = false;
console.log(`value of student.livesInIrvine: ${student.livesInIrvine}`);
student['previousOccupation'] = 'Sales Consultant'
console.log(`value of student.previousOccupation: ${student.previousOccupation}`);
console.log('Value of student: ', student);

var vehicle = {
  make: 'Chevy',
  model: 'Silverado',
  year: 2008
}
vehicle['color'] = 'Silver';
vehicle['isConvertible'] = false;
console.log(`value of vehicle.color: ${vehicle.color}`);
console.log(`value of vehicle.isConvertible: ${vehicle.isConvertible}`);
console.log('Value of vehicle: ', vehicle);

var pet = {
  name: 'Annabele e Delia',
  type: 'cats'
}
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
