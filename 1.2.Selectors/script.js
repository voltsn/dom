// Add a title attribute to every element with the 
// "important" class. With a value of "This is an
// important item".
document.querySelectorAll(".important").forEach(
  (element) => {
    element.setAttribute("title","This is an important item");
  }
);

// Select all the img tags and loop through them,
// if they don't have the "important" class. Set 
// their "display" to none.
document.querySelectorAll("img").forEach(
  (img) => {
    if (!img.classList.contains("important")) {
     img.style.display = "none"; 
    }
  }
);

// Loop through all the paragraphs and display their
// contents in the console. If they have a class,
// display their classname aswell.
let paragraphs = document.querySelectorAll("p")
paragraphs.forEach(
  (element) => {
    let output = element.textContent;
    if (element.classList.length !== 0) {
      output += " | class list:";
      for (let i = 0; i < element.classList.length; i++){
        output += " " + element.classList[i];
      }
    }
    console.log(output);
  }
);

// Give each of the paragraphs a random text color unless
// it has a class.
const randomValue = (max) => {
  // Returns a random number between 0 and max.
  return Math.floor(Math.random() * max + 1);
}

const randomColor = () => {
  // Returns a random rgb color.
  return `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)}`;
}

for (paragraph of paragraphs) {
  paragraph.style.color = randomColor();
}
