//Day 6:Arrays.
//Task and Activities.

//Activity 1 Array creation and Access.

//Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//Task 2: Access the first and last elements of the array and log it to the console.

let firstElement = numbers[0];
let lastElement = numbers[numbers.length - 1];
console.log(firstElement);
console.log(lastElement);

//Activity 2 :Array Methods

//Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log("updated array after push :" + numbers);

//Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log("updated array after poping :" + numbers);

//Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log(numbers);

//Task 6:Use the unshift method to add a number to the begining of the array and log the updated array.
numbers.unshift(3);
console.log(numbers);

//Activity 3 :Array methods (intermediat)

//Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let doubledNumbers = numbers.map((num) => num * 2);
console.log("Doubled numbers:", doubledNumbers);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

//Activity 4: Array Iteration

//Task 11: Use the forEach method to iterate over the array and log each element to the console.

numbers.forEach((num) => console.log(num));

//Activity 5: Multi-dimensional Arrays

//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);

//Task 13: Access and log a specific element from the two-dimensional array.

let specificElement = matrix[1][1]; // Accessing the element at the second row and second column (index 1,1)
console.log("Specific element:", specificElement);

//Feature Requests

//Array Manipulation Script

let array = [1, 2, 3];
console.log("Original array:", array);

array.push(4);
console.log("After push:", array);

array.pop();
console.log("After pop:", array);

array.shift();
console.log("After shift:", array);

array.unshift(0);
console.log("After unshift:", array);

//Array Transformation Script

let originalArray = [1, 2, 3, 4, 5];

let transformedArray = originalArray.map((num) => num * 3);
console.log("Mapped array (tripled):", transformedArray);

let filteredArray = originalArray.filter((num) => num > 2);
console.log("Filtered array (greater than 2):", filteredArray);

let totalSum = originalArray.reduce((acc, num) => acc + num, 0);
console.log("Total sum:", totalSum);

//Array Iteration Script

let iterateArray = [1, 2, 3, 4, 5];

for (let i = 0; i < iterateArray.length; i++) {
  console.log("for loop:", iterateArray[i]);
}

iterateArray.forEach((num) => console.log("forEach:", num));

//Two-dimensional Array Script

let twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Two-dimensional array:", twoDArray);

let element = twoDArray[2][1]; // Accessing the element at the third row and second column (index 2,1)
console.log("Accessed element:", element);
