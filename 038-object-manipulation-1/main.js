// 1
function getValue(object, key) {
  return object[key];
}
const dave = { firstName: 'David', lastName: 'Thomas' }
console.log(getValue(dave, 'firstName'));
console.log(getValue(dave, 'lastName'));
const learningFuze = { latitude: 33.6349, longitude: 117.7405 }
console.log(getValue(learningFuze, 'latitude'));
console.log(getValue(learningFuze, 'longitude'));
const tim = { name: 'Tim', language: 'JavaScript' }
console.log(getValue(tim, 'name'));
console.log(getValue(tim, 'language'));

// 2
function setValue(object, key, value) {
  object[key] = value;
}
const dave2 = { firstName: 'David' };
setValue(dave2, 'lastName', 'Thomas');
console.log(dave2);
const learningFuze2 = { latitude: 33.6349 };
setValue(learningFuze2, 'attitude', 'sanguine');
console.log(learningFuze2);
const tim2 = { name: 'Tim', language: 'JavaScript' };
setValue(tim2, 'language', 'PHP');
console.log(tim2);

// 3
function getKeys(object) {
  const keys = [];
  for (key in object) {
    keys.push(key);
  }
  return keys;
}
const dave3 = {
  firstName: 'David',
  lastName: 'Thomas'
};
console.log(getKeys(dave3));
const learningfuze3 = {
  latitude: 33.6349,
  attitude: 'sanguine',
  longitude: 117.7405
}
console.log(getKeys(learningfuze3));
const tim3 = {}
console.log(getKeys(tim3));

// 4
function getValues(object) {
  const values = [];
  for (key in object) {
    values.push(object[key]);
  }
  return values;
}
const dave4 = {
  firstName: 'David',
  lastName: 'Thomas'
};
console.log(getValues(dave4));
const learningfuze4 = {
  latitude: 33.6349,
  attitude: 'sanguine',
  longitude: 117.7405
}
console.log(getValues(learningfuze4));
const tim4 = {}
console.log(getValues(tim4));

// 5
function toObject(keyValuePair) {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
console.log(toObject(['firstName', 'David']));
console.log(toObject(['isCool', true]));
console.log(toObject(['employer', 'LearningFuze']));
