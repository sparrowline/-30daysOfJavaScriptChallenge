//Activity 1: Object Creation and Access

//Task 2: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
  title: "Think like a Monk",
  author: "Jay Shety",
  year: 2020,
};

console.log(book);

//Activity 2: Object Methods

//Task 4: Add a method to the book object that takes a parameter newYear and updates the book's year property, then log the updated object.

book.updateYear = function (newYear) {
  this.year = newYear;
};

book.updateYear(2023);
console.log(book);

//Activity 3: Nested Objects

//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library = {
  name: "City Library",
  books: [
    { title: "1999", author: "George ", year: 1949 },
    { title: "ChaiCode", author: "Hitesh ", year: 2020 },
    { title: "Code With Hitesh", author: "Hitesh ", year: 2024 },
  ],
};

console.log(library);

//Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log("Library Name:", library.name);
library.books.forEach((book) => console.log("Book Title:", book.title));

//Activity 4: The this Keyword

//Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book.getTitleAndYear = function () {
  return `Title: ${this.title}, Year: ${this.year}`;
};

console.log(book.getTitleAndYear());

//Activity 5: Object Iteration

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));

//Feature Requests
//Book Details Script: Create a script that iterates over an array of book objects and logs each book's details.
let books = [
  {
    title: "The subtle art of not giving a fuck",
    author: "A soldier",
    year: 1925,
  },
  { title: "Atomic Habits", author: "James Clere", year: 1851 },
  { title: "Think and grow rich", author: "Leo Tolstoy", year: 1869 },
];

books.forEach((book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`
  );
});

//Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys / Object.values.

let sampleObject = {
  name: "Sam",
  age: 30,
  city: "New York",
};

// Using for...in loop
for (let key in sampleObject) {
  if (sampleObject.hasOwnProperty(key)) {
    console.log(`${key}: ${sampleObject[key]}`);
  }
}

// Using Object.keys and Object.values

console.log("Keys:", Object.keys(sampleObject));
console.log("Values:", Object.values(sampleObject));
