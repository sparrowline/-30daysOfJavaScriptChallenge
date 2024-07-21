//*Activity 2: Assignment Operators


// Task 6: Using the += operator
let number = 5;
number += 3; // equivalent to number = number + 3
console.log("Task 6 - Result of += operator:", number); // Output: 8

// Task 7: Using the -= operator
let anotherNumber = 10;
anotherNumber -= 4; // equivalent to anotherNumber = anotherNumber - 4
console.log("Task 7 - Result of -= operator:", anotherNumber); // Output: 6

// Task 8: Using > and < operators
let num1 = 10;
let num2 = 5;
console.log("Task 8 - Is num1 > num2?", num1 > num2); // Output: true
console.log("Task 8 - Is num1 < num2?", num1 < num2); // Output: false


// Task 9: Using >= and <= operators
console.log("Task 9 - Is num1 >= num2?", num1 >= num2); // Output: true
console.log("Task 9 - Is num1 <= num2?", num1 <= num2); // Output: false


// Task 10: Using == and === operators
let num3 = '10';
console.log("Task 10 - Is num1 == num3?", num1 == num3); // Output: true (loose equality)
console.log("Task 10 - Is num1 === num3?", num1 === num3); // Output: false (strict equality)

// Task 11: Using && operator
let condition1 = true;
let condition2 = false;
console.log("Task 11 - Result of && operator:", condition1 && condition2); // Output: false


// Task 12: Using || operator
console.log("Task 12 - Result of || operator:", condition1 || condition2); // Output: true


// Task 13: Using ! operator
console.log("Task 13 - Result of ! operator:", !condition1); // Output: false


// Task 14: Using the ternary operator
let numberToCheck = -5;
let result = numberToCheck > 0 ? "Positive" : "Negative";
console.log("Task 14 - Is the number positive or negative?", result); // Output: Negative


// Feature Request 1: Arithmetic Operations Script
let a = 12;
let b = 4;
console.log("Addition:", a + b); // Output: 16
console.log("Subtraction:", a - b); // Output: 8
console.log("Multiplication:", a * b); // Output: 48
console.log("Division:", a / b); // Output: 3
console.log("Remainder:", a % b); // Output: 0


// Feature Request 2: Comparison and Logical Operators Script
let x = 7;
let y = 10;

console.log("Is x > y?", x > y); // Output: false
console.log("Is x < y?", x < y); // Output: true
console.log("Is x >= y?", x >= y); // Output: false
console.log("Is x <= y?", x <= y); // Output: true
console.log("Is x == y?", x == y); // Output: false
console.log("Is x === y?", x === y); // Output: false

console.log("Is x < y && x != y?", x < y && x != y); // Output: true
console.log("Is x > y || x == 7?", x > y || x == 7); // Output: true
console.log("Is !(x == y)?", !(x == y)); // Output: true



// Feature Request 3: Ternary Operator Script
let numberCheck = 15;
let checkResult = numberCheck >= 0 ? "Positive" : "Negative";
console.log("Is the number positive or negative?", checkResult); // Output: Positive
