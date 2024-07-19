

// Day 1: Variables and Data Types

// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var numberVar = 42;
console.log("Task 1 - var:", numberVar); // Output: 42

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let stringLet = "Hello, JavaScript!";
console.log("Task 2 - let:", stringLet); // Output: Hello, JavaScript!

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const booleanConst = true;
console.log("Task 3 - const:", booleanConst); // Output: true

// Activity 3: Data Types

// Task 4: Declare variables of different data types and log each variable's type using the typeof operator.
let numberType = 100;
let stringType = "Learning JavaScript";
let booleanType = false;
let objectType = { key: "value" };
let arrayType = [1, 2, 3, 4, 5];

console.log("Task 4 - numberType:", numberType, typeof numberType); // Output: 100 number
console.log("Task 4 - stringType:", stringType, typeof stringType); // Output: Learning JavaScript string
console.log("Task 4 - booleanType:", booleanType, typeof booleanType); // Output: false boolean
console.log("Task 4 - objectType:", objectType, typeof objectType); // Output: { key: 'value' } object
console.log("Task 4 - arrayType:", arrayType, typeof arrayType); // Output: [ 1, 2, 3, 4, 5 ] object

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let reassignVar = "Initial Value";
console.log("Task 5 - Initial Value:", reassignVar); // Output: Initial Value
reassignVar = "Reassigned Value";
console.log("Task 5 - Reassigned Value:", reassignVar); // Output: Reassigned Value

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
const immutableConst = "Immutable Value";
console.log("Task 6 - const before reassignment:", immutableConst); // Output: Immutable Value

// Uncomment the line below to see the error
// immutableConst = "New Value"; // This will cause an error: TypeError: Assignment to constant variable.

// Feature Request 1: Variable Types Console Log

// Declare variables of different data types and log both the value and type of each variable to the console.
console.log("Feature Request 1:");
console.log("numberType:", numberType, "Type:", typeof numberType); // Output: 100 number
console.log("stringType:", stringType, "Type:", typeof stringType); // Output: Learning JavaScript string
console.log("booleanType:", booleanType, "Type:", typeof booleanType); // Output: false boolean
console.log("objectType:", objectType, "Type:", typeof objectType); // Output: { key: 'value' } object
console.log("arrayType:", arrayType, "Type:", typeof arrayType); // Output: [ 1, 2, 3, 4, 5 ] object

// Feature Request 2: Reassignment Demo

// Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let reassignableLet = "I can be reassigned";
const immutableConstDemo = "I cannot be reassigned";

console.log("Feature Request 2 - Initial reassignableLet:", reassignableLet); // Output: I can be reassigned
reassignableLet = "I have been reassigned";
console.log("Feature Request 2 - Reassigned reassignableLet:", reassignableLet); // Output: I have been reassigned

console.log("Feature Request 2 - Initial immutableConstDemo:", immutableConstDemo); // Output: I cannot be reassigned

// Uncomment the line below to see the error
// immutableConstDemo = "Trying to reassign"; // This will cause an error: TypeError: Assignment to constant variable.

// Achievement

// By the end of these activities, you will:
// • Know how to declare variables using var, let, and const.
// • Understand the different data types in JavaScript.
// • Be able to use the typeof operator to identify the data type of a variable.
// • Understand the concept of variable reassignment and the immutability of const variables.
