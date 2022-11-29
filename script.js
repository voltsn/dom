// Display the document title in the console.
let title = document.querySelector("title");
console.log(title.textContent);

// Change the document title to "Modifying the DOM"
title.textContent = "Modifying the DOM";

// Change the background color of the body to hot pink (#FF69B4).
let body = document.querySelector("body");
body.style.backgroundColor = "#FF69B4";

// Challenge try with random colors.
const randomRGBValue = () => {
  return Math.floor(Math.random() * 255);
}
body.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()}`;

// Using the children method and for...of loop[ display every child
// in the body element.
for(child of body.children) {
  console.log(child);
}
