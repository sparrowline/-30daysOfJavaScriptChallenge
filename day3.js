//Day 3 Control Structures

//Task/activities
//Activit 1: if-else Statement

//Task 1 Write a program to check if a number is positive or negative or zero and log the results to the console.

let number = -1;

if (number > 0) {
  console.log("Number is positive");
} else if (number < 0) {
  console.log("Number is Negative");
} else if (number == 0) {
  console.log("Number is equal to zero");
}

//Task 2 Write a program to check if a person is eligible to vote (age>=18) and log the results to the console.

let age = 8;

if (age >= 18) {
  console.log("Your entered age is " + age + " : you are eligible to vote");
} else if (age < 18) {
  console.log("Your entered age is " + age + " : you are not eligible to vote");
}

//*Activity 2 : Nested if-else Statement

//Task 3: Write a program to find the largest of 3 numbers using nested if-else Statement.

let num1 = -90;
let num2 = 60;
let num3 = -90;

if (num1 >= num2) {
  if (num1 >= num3) {
    console.log(num1 + " : is the largest among all.");
  } else {
    console.log(num3 + " : is the largest among all.");
  }
} else {
  if (num2 >= num3) {
    console.log(num2 + " : is the largest amongs all");
  } else {
    console.log(num3 + " : is the largest among all");
  }
}

//Activity 3:Switch Case

//Task 4: Write a program that uses swich case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuseday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("invalid Day");
}

/*Task 5: Write a program that uses a switch case to
 assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.*/

let marks = 79;
let grade;
switch (true) {
  case marks >= 90 && marks <= 100:
    //console.log("marks :" + marks + "," + "grade :" + "A"); insted used interpolation
    grade = "A";
    break;

  case marks >= 80 && marks < 90:
    grade = "B";
    break;

  case marks >= 70 && marks < 80:
    grade = "C";
    break;

  case marks >= 60 && marks < 70:
    grade = "D";
    break;

  case marks >= 0 && marks < 60:
    grade = "F";
    break;

  default:
    grade = "invalid Score";
}
console.log(`marks : ${marks}, grade :${grade}`);

//*Activity 4: Conditional (Ternary) Operator
//• Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let a = 88;
let result = a % 2 === 0 ? "Even" : "Odd";
console.log(result);

//The above Task 5 with ternery operator can be done like below

let score = 79;

let grade1 =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";

console.log(`score =${score},grade=${grade1}`);

//*Activity 5: Combining Conditions

/*Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4,
 but not 100 unless also divisible by 400) and log the result to the console.*/

let year = 2009;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("The year is leap year : " + year);
} else console.log("year is not a leap year");
