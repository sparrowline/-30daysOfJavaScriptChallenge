// Activity 1: Basic Event Handling
// Task 1
let clickButton = document.getElementById("clickButton");
let clickParagraph = document.getElementById("clickParagraph");

clickButton.addEventListener("click", function () {
  clickParagraph.textContent = "Text changed on click!";
});

// Task 2
let toggleImage = document.getElementById("toggleImage");

toggleImage.addEventListener("dblclick", function () {
  if (toggleImage.style.display === "none") {
    toggleImage.style.display = "block";
  } else {
    toggleImage.style.display = "none";
  }
});

// Activity 2: Mouse Events
// Task 3
let hoverDiv = document.getElementById("hoverDiv");

hoverDiv.addEventListener("mouseover", function () {
  hoverDiv.style.backgroundColor = "lightblue";
});

// Task 4
hoverDiv.addEventListener("mouseout", function () {
  hoverDiv.style.backgroundColor = "";
});

// Activity 3: Keyboard Events
// Task 5
let keyInput = document.getElementById("keyInput");
let keyParagraph = document.getElementById("keyParagraph");

keyInput.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
});

// Task 6
keyInput.addEventListener("keyup", function () {
  keyParagraph.textContent = keyInput.value;
});

// Activity 4: Form Events
// Task 7
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted:", new FormData(myForm));
});

// Task 8
let mySelect = document.getElementById("mySelect");
let selectParagraph = document.getElementById("selectParagraph");

mySelect.addEventListener("change", function () {
  selectParagraph.textContent = "Selected: " + mySelect.value;
});

// Activity 5: Event Delegation
// Task 9
let myList = document.getElementById("myList");

myList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("List item clicked:", event.target.textContent);
  }
});

// Task 10
let addItemButton = document.getElementById("addItemButton");

addItemButton.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New List Item";
  myList.appendChild(newItem);
});

// Feature Request Scripts
// 1. Click Event Script
clickButton.addEventListener("click", function () {
  clickParagraph.textContent = "Text changed on button click!";
});

// 2. Mouse Events Script
hoverDiv.addEventListener("mouseover", function () {
  hoverDiv.style.backgroundColor = "lightblue";
});
hoverDiv.addEventListener("mouseout", function () {
  hoverDiv.style.backgroundColor = "";
});

// 3. Keyboard Events Script
keyInput.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
});
keyInput.addEventListener("keyup", function () {
  keyParagraph.textContent = keyInput.value;
});

// 4. Form Events Script
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted:", new FormData(myForm));
});
mySelect.addEventListener("change", function () {
  selectParagraph.textContent = "Selected: " + mySelect.value;
});

// 5. Event Delegation Script
myList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("List item clicked:", event.target.textContent);
  }
});
addItemButton.addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New List Item";
  myList.appendChild(newItem);
});
