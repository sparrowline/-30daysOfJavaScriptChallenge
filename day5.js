console.log("hello world");

//Day 5:Functions
//*Activity 1 :Function Declaration
//Task 1. Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }
}

// Example usage:
checkEvenOrOdd(5); // Output: 5 is odd
checkEvenOrOdd(8); // Output: 8 is even

//Task 2. Write a function to calculate a square of a function and return the result.

function calculateSquare(number) {
  return number * number;
}

// Example usage:
console.log(calculateSquare(4)); // Output: 16
console.log(calculateSquare(7)); // Output: 49

//Activity 2: Function Expression

//Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};

// Example usage:
console.log(findMax(10, 15)); // Output: 15
console.log(findMax(20, 5)); // Output: 20

//• Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function (str1, str2) {
  return str1 + str2;
};

// Example usage:
console.log(concatenateStrings("Hello, ", "world!")); // Output: Hello, world!
console.log(concatenateStrings("Good ", "morning!")); // Output: Good morning!

//Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const calculateSum = (num1, num2) => num1 + num2;

// Example usage:
console.log(calculateSum(3, 4)); // Output: 7
console.log(calculateSum(10, 20)); // Output: 30

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsCharacter = (str, char) => str.includes(char);

// Example usage:
console.log(containsCharacter("hello", "e")); // Output: true
console.log(containsCharacter("world", "a")); // Output: false

//Activity 4: Function Parameters and Default Values
//: Task 7: Write a function that takes a two parameters and returns their product provide a default value to the second parameter.
function multiply(a, b = 1) {
  return a * b;
}

// Example usage:
console.log(multiply(5, 3)); // Output: 15
console.log(multiply(7)); // Output: 7 (since b defaults to 1)

//Task 8 : Write a function that takes a two parameters name and age returns a greating msg provide a default value for the msg.
function greet(name, age, message = "Hello") {
  return `${message}, ${name}. You are ${age} years old.`;
}

// Example usage:
console.log(greet("Alice", 30)); // Output: Hello, Alice. You are 30 years old.
console.log(greet("Bob", 25, "Hi")); // Output: Hi, Bob. You are 25 years old.

//  Activity 5: Higher-Order Functions

//Task 9 : write a higher order function that takes a function and a number and calls the function that many times.

function repeatFunction(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

// Example usage:
const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3);
// Output:
// Hello!
// Hello!
// Hello!

//Task 10 : Write a higer order function that takes two functions and a value. applies the first function to the value and then applies second function to the result.
function applyFunctionsSequentially(func1, func2, value) {
  return func2(func1(value));
}

// Example usage:
const addFive = (num) => num + 5;
const multiplyByThree = (num) => num * 3;

console.log(applyFunctionsSequentially(addFive, multiplyByThree, 10)); // Output: 45
// Explanation: addFive(10) => 15, then multiplyByThree(15) => 45
