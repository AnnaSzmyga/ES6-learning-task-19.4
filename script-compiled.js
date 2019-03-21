'use strict';

//task 1

var x = 'Hello';
var y = 'World';

console.log(x + ' ' + y);

//task 2

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(2, 5));
console.log(multiply(4));

//task 3

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = 0;args.forEach(function (arg) {
    return sum += arg;
  });return sum / args.length;
};

console.log(average(1, 2, 3, 4));

//task 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

//task 5

var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];


console.log(firstName);
console.log(lastName);
