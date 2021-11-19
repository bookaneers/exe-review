// 1
function take(array, count) {
  const result = [];
  for (var i = 0; i < count; i++) {
    result.push(array[i]);
  }
  return result;
}
console.log(take(['foo', 'bar', 'baz', 'qux'], 2));
console.log(take([1, 2, 3, 4, 5], 1));
console.log(take([false, true, false, true], 3));
console.log(take([], 7));

// 2
function drop(array, count) {
  const result = [];
  for (var i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
console.log(drop(['foo', 'bar', 'baz', 'qux'], 2));
console.log(drop([1, 2, 3, 4, 5], 1));
console.log(drop([false, true, false, true], 3));
console.log(drop([], 7));

// 3
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return true;
  }
  return false;
}
console.log(includes(['foo', 'bar', 'baz', 'qux'], 'baz'));
console.log(includes(['foo', 'bar', 'baz', 'qux'], 'corge'));
console.log(includes([1, 2, 3, 4, 5], 2));
console.log(includes([1, 2, 3, 4, 5], 7));
console.log(includes([false, true, false, true], false));
console.log(includes([false, true, false, true], null));
console.log(includes([], true));
console.log(includes([], 'foo'));
console.log(includes([], 7));

// 4
function takeRight(array, count) {
  const result = [];
  if (count > array.length) return [];
  for (var i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}
console.log(takeRight(['foo', 'bar', 'baz', 'qux'], 2));
console.log(takeRight([1, 2, 3, 4, 5], 1));
console.log(takeRight([false, true, false, true], 3));
console.log(takeRight([], 7));

// 5
function dropRight(array, count) {
  const result = [];
  // if (count > array.length) return [];
  for (var i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  }
  return result;
}
console.log(dropRight(['foo', 'bar', 'baz', 'qux'], 2));
console.log(dropRight([1, 2, 3, 4, 5], 1));
console.log(dropRight([false, true, false, true], 3));
console.log(dropRight([], 7));

// 6
function chunk(array, size) {
  var small = [];
  var big = [];
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    small.push(array[i]);
    counter++;
    if (counter === size || i === array.length - 1) {
      big.push(small);
      small = [];
      counter = 0;
    }
  }
  return big;
}
console.log(chunk(['foo', 'bar', 'baz', 'qux'], 2));
console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([false, true, false, true], 3));
console.log(chunk([], 7));
