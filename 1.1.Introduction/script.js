// Display the document title in the console.
console.log(document.title);

// Change the document title to "Modifying the DOM"
document.title = "Modifying the DOM";

// Change the background color of the body to hot pink (#FF69B4).
let body = document.body;
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
