// 1
function pick(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
      if (source.hasOwnProperty(keys[i])) result[keys[i]] = source[keys[i]];
  }
  return result;
}
console.log(pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));
console.log(pick({ qux: 4, corge: 5 }, ['bar', 'grault']));
console.log(pick({ bar: 2 }, ['foo', 'bar', 'baz']));

// 2
function omit(source, keys) {
  const result = source;
  for (let i = 0; i < keys.length; i++) {
    if (result.hasOwnProperty(keys[i])) delete result[keys[i]];
  }
  return result;
}
console.log(omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));
console.log(omit({ qux: 4, corge: 5 }, ['bar', 'grault']));
console.log(omit({}, ['foo', 'bar', 'baz']));

// 3
function invert(source) {
  const result = {};
  for (key in source) {
    result[source[key]] = key;
  }
  return result;
}
console.log(invert({ age: NaN, occupation: 'programmer', language: 'JavaScript' }))
console.log(invert({ accountId: 'axbxcx', amount: 1000, type: 'withdrawal' }));
console.log(invert({ name: 'ada', type: 'cat', breed: 'bengal', age: 1.5 }));
console.log(invert({}));

// 4
function defaults(target, source) {
  for (key in source) {
    if (!target.hasOwnProperty(key)) target[key] = source[key];
  }
  return target;
}
const target = {};
const source = {
  foo: 1,
  bar: 2,
  baz: 3
};
defaults(target, source);
console.log(target)

const target2 = {
  foo: 1,
  baz: 3
};
const source2 = {
  bar: 2
};
console.log(defaults(target2, source2));

const target3 = {
  foo: 1,
  baz: 3
};
const source3 = {
  foo: 4,
  bar: 2,
  baz: 5
};
console.log(defaults(target3, source3));

const target4 = {
  foo: 1,
  baz: 3
};
const source4 = {};
console.log(defaults(target4, source4));
