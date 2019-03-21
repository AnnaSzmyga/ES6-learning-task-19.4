//task 1

const x = 'Hello';
const y = 'World';

console.log(`${x} ${y}`);

//task 2

const multiply = (a, b = 1) => a * b;

console.log(multiply(2,5));
console.log(multiply(4));

//task 3

const average = (...args) => {let sum = 0; args.forEach(arg => sum +=arg); return sum/args.length};

console.log(average(1, 2, 3, 4));

//task 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//task 5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = data;

console.log(firstName);
console.log(lastName);