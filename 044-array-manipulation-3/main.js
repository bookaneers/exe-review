// 1
function equal(first, second) {
  if (first.length !== second.length) return false;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) return false;
  }
  return true;
}
console.log(equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'baz']));
console.log(equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'qux']));
console.log(equal([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
console.log(equal([1, 2, 3, 4, 5], [1, 2, 3, 3, 5]));
console.log(equal([false, true, false, true], [false, true, false, true]));
console.log(equal([false, true, false, true], [true, false, true, false]));
console.log(equal([], []));

// 2
function flatten(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let k = 0; k < array[i].length; k++) {
        result.push(array[i][k]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(flatten([['foo', 'bar'], ['baz', 'qux']]));
console.log(flatten([[1], [2], 3, 4, [5]]));
console.log(flatten([false, [true, [false]], [true]]));
console.log(flatten([]));

// 3
function zip(first, second) {
  let smallArray = []
  const bigArray = [];
  for (let i = 0; i < first.length; i++) {
    if (i === second.length) return bigArray;
    smallArray.push(first[i]);
    smallArray.push(second[i]);
    bigArray.push(smallArray);
    smallArray = [];
  }
  return bigArray;
}
console.log(zip(['name', 'course', 'grade'], ['Cody', 'CSS', 9001]));
console.log(zip(['dog', 'lion', 'hawk', 'tiger'],['cat', 'lamb', 'dove']));
console.log(zip([1, 3, 5], [2, 4, 6, 8]));
console.log(zip(['l', 'e', 'a', 'r', 'n', 'i'], ['n', 'g', 'f', 'u', 'z', 'e']));

// 4
function unique(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) result.push(array[i]);
  }
  return result;
}
console.log(unique(['foo', 'bar', 'baz', 'qux', 'bar', 'qux', 'corge', 'baz']));
console.log(unique([1, 3, 3, 2, 5, 2, 1, 4, 5, 5]));
console.log(unique([false, true, false, true]));
console.log(unique([]));

// 5
function difference(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) result.push(first[i]);
  }
  for (let k = 0; k < second.length; k++) {
    if (!first.includes(second[k])) result.push(second[k]);
  }
  return result;
}
console.log(difference([2, 1], [2, 3]));
console.log(difference(['html', 'css', 'javascript'], ['php', 'css', 'sql']));
console.log(difference(
  ['a', 'link', 'to', 'the', 'past'],
  ['the', 'adventure', 'of', 'link']
));

// 6
function intersection(first, second) {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) result.push(first[i]);
  }
  return result;
}
console.log(intersection([2, 1], [2, 3]));
console.log(intersection(['html', 'css', 'javascript'], ['php', 'css', 'sql']));
console.log(intersection(
  ['a', 'link', 'to', 'the', 'past'],
  ['the', 'adventure', 'of', 'link']
));

// 7
function union(first, second) {
  const result = first;
  for (let i = 0; i < second.length; i++) {
    if (!result.includes(second[i])) result.push(second[i]);
  }
  return result;
}
console.log(union([2, 1], [2, 3]));
console.log(union(['html', 'css', 'javascript'], ['php', 'css', 'sql']));
console.log(union(
  ['a', 'link', 'to', 'the', 'past'],
  ['the', 'adventure', 'of', 'link']
));
