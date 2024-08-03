// Activity 1: Selecting and Manipulating Elements
// Task 1
let paragraph = document.getElementById("myParagraph");
paragraph.textContent = "New Text Content";

// Task 2
let element = document.querySelector(".myClass");
element.style.backgroundColor = "lightblue";

// Activity 2: Creating and Appending Elements
// Task 3
let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div element";
document.body.appendChild(newDiv);

// Task 4
let newItem = document.createElement("li");
newItem.textContent = "New Item";
let list = document.getElementById("myList");
list.appendChild(newItem);

// Activity 3: Removing Elements
// Task 5
let elementToRemove = document.getElementById("removeMe");
elementToRemove.remove();

// Task 6
list.removeChild(list.lastElementChild);

// Activity 4: Modifying Attributes and Classes
// Task 7
let image = document.getElementById("myImage");
image.setAttribute("src", "new-image.jpg");

// Task 8
let paragraphClass = document.getElementById("myParagraph");
paragraphClass.classList.add("highlight");
paragraphClass.classList.remove("highlight");

// Activity 5: Event Handling
// Task 9
let hoverDiv = document.getElementById("hoverDiv");

hoverDiv.addEventListener("mouseover", function () {
  hoverDiv.style.borderColor = "red";
});

hoverDiv.addEventListener("mouseout", function () {
  hoverDiv.style.borderColor = "initial";
});

// Feature Request Scripts
// 1. Text Content Manipulation Script
let textElement = document.getElementById("textElement");
textElement.textContent = "Updated Text Content";

// 2. Element Creation Script
let newDivElement = document.createElement("div");
newDivElement.textContent = "This is a dynamically created div element.";
document.body.appendChild(newDivElement);

// 3. Element Removal Script
let removeElement = document.getElementById("removeElement");
removeElement.parentNode.removeChild(removeElement);

// 4. Attribute Modification Script
let sampleImage = document.getElementById("sampleImage");
sampleImage.src = "new-image.jpg";

// 5. Event Handling Script
let clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", function () {
  alert("Button was clicked!");
});
