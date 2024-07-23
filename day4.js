console.log("Hello world");

//Day 4 Loops
//Task/Activities
//Activity 1: for loop

//Task 1: Write a program to print nubmbers form 1 to 10 using for loop

for (let a = 1; a <= 10; a++) {
  console.log(a);
}

//Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let b = 1; b <= 10; b++) {
  console.log("5 * " + b + " = " + 5 * b);
}

//*Activity 2: while loop
//Write a program to calculate the sum of numbers from 1 to 10 using while loop;

let number = 1;
let sum = 0;

while (number <= 10) {
  sum = number + sum;
  number++;
}
console.log("sum of Number from 1 to 10 is :" + sum);

//Write a program to print numbers from 10 to 1 using while loop

console.log("Program to print numbers from 10 to 1 ");
let d = 10;

while (d >= 1) {
  console.log(d);
  d--;
}

//* Activity 3: Do while loop
//Write a program to print number from 1 to 5 using do while loop

console.log("printing numbers from 1 to 5 using do while loop");
let e = 1;

do {
  console.log(e);
  e++;
} while (e <= 5);

//Write a program to calculate the factorial of a number using do while loop.

let x = 5;
let factorial = 1;

do {
  factorial = factorial * x;
  x--;
} while (x >= 1);

console.log("factorial of a number is : " + factorial);

//* Activit nested loops
//Task:Write a program to print a pattern using nested for loops.
console.log("the pattern is below");
let row = 5;
for (let i = 1; i <= row; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern.trim());
}

//* Activity 5 : controle Statements.

//Task 8: Write a program to print the numbers from 1 to 10 but skip the number 5 using continue key word;

for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    continue;
  }
  console.log(index);
}

//Task 9 : Write a program to print numbers 1 to 10 but stop the loop if its 7 using break key word;

for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}

//*****-----*****//
