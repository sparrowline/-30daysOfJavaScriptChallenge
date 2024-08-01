//Activity 1: Template Literals

//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "Hitesh";
let age = 30;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);

//Task 2: Create a multi-line string using template literals and log it to the console.

let multiLineString = ` To create a multiline string you need to use interpolation .This is a string
that spans multiple
lines using template literals. `;
console.log(multiLineString);

//Activity 2: Destructuring

//Task 4: Use array destructuring to extract the first and second items from an array and log them to the console.

let array = [1, 2, 3, 4, 5];
let [first, second] = array;
console.log(first); // Output: 1
console.log(second); // Output: 2

//Activity 3: Spread and Rest Operators

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
console.log(sum(5, 6, 7)); // Output: 18

//Activity 4: Default Parameters

//Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10

//Activity 5: Enhanced Object Literals

//Task 9: Create an enhanced object literal with a method and log it to the console.

let propName = "dynamicProperty";

let enhancedObject = {
  name: "Enhanced Object",
  [propName]: "This is a dynamic property",
  greet() {
    console.log(`Hello from ${this.name}`);
  },
};

console.log(enhancedObject);
enhancedObject.greet();

//Feature Request Scripts

// 1. Template Literals Script

let personName = "Aman Dhatarwal";
let personAge = 25;
let greetingMessage = `Hello, my name is ${personName} and I am ${personAge} years old.`;

let multiLineMsg = `This is a multi-line string
created using template literals.
It is very useful for creating strings
that span multiple lines.`;

console.log(greetingMessage);
console.log(multiLineMsg);

//2. Destructuring Script

let numbers = [10, 20, 30, 40];
let [num1, num2] = numbers;

let person = { firstName: "King", lastName: "Smith", Age: 40 };
let { firstName, Age } = person;

console.log(num1, num2); // Output: 10 20
console.log(firstName, age); // Output: Bob 40

//3. Spread and Rest Operators Script

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

function calculateSum(...args) {
  return args.reduce((sum, current) => sum + current, 0);
}

console.log(calculateSum(1, 2, 3)); // Output: 6
console.log(calculateSum(4, 5)); // Output: 9

//4. Default Parameters Script

function divide(a, b = 1) {
  return a / b;
}

console.log(divide(10)); // Output: 10
console.log(divide(10, 2)); // Output: 5

//   5. Enhanced Object Literals Script

let methodName = "sayHello";

let myObject = {
  name: "My Object",
  [methodName]() {
    return `Hello from ${this.name}`;
  },
};

console.log(myObject);
console.log(myObject.sayHello());
