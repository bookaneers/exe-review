// 1
function head(array) {
  return array[0];
}
console.log(head(['foo', 'bar', 'baz']));
console.log(head([1, 2, 3, 4, 5]));
console.log(head([false, true, false, true]));
console.log(head([]));

// 2
function last(array) {
  return array[array.length - 1];
}
console.log(last(['foo', 'bar', 'baz']));
console.log(last([1, 2, 3, 4, 5]));
console.log(last([false, true, false, true]));
console.log(last([]));

// 3
function tail(array) {
  var afterTheFirst = [];
  for (var i = 1; i < array.length; i++) {
    afterTheFirst.push(array[i]);
  }
  return afterTheFirst;
}
console.log(tail(['foo', 'bar', 'baz']));
console.log(tail([1, 2, 3, 4, 5]));
console.log(tail([false, true, false, true]));
console.log(tail([]));

// 4
function initial(array) {
  var exceptTheLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    exceptTheLast.push(array[i]);
  }
  return exceptTheLast;
}
console.log(initial(['foo', 'bar', 'baz']));
console.log(initial([1, 2, 3, 4, 5]));
console.log(initial([false, true, false, true]));
console.log(initial([]));

// 5
function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >=0 ; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}
console.log(reverse(['foo', 'bar', 'baz']));
console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse([false, true, false, true]));
console.log(reverse([]));
