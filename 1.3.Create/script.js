/*
 * Instructions
 * ----------------------------------------------------------
 *
 * Create a section element for each learner with 
 * a random background color. The sections should 
 * contain a paragraph with the name of the learner
 * and appended in the article tag.
 *
 * If the background is dark the text should be white,
 * if the background is light the text should be black.
 *
 * Change the order of the elements on every page load.
 */
const learners = [
  "Arno Volts",
  "Aurélien Mariaule",
  "Aurore Lemaire",
  "Benjamin Porsont",
  "Céline Verreydt",
  "Corentin Miserque",
  "Dominique Coppée",
  "Edouard de Romrée de Vichenet",
  "Hugo Goorickx ",
  "Jofrey Houyoux",
  "Jonathan Manes",
  "jonathan bajoux",
  "Laura Wilhelmi",
  "Lysie Soyez",
  "Marnie Benalia",
  "Mathilde Cornelis",
  "Milo Bonnet",
  "Nadim El Nakadi",
  "Nathalie Vanden Abeele",
  "Nathalie Goffette",
  "Nour Everaert",
  "Pierre Mauriello",
  "Quentin Bource ",
  "Virginie Dourson",
];

// Shuffles the contents an array using the Fisher-Yates
// shuffle algorithm.
const shuffle = (arr) => {
  let currentIndex = arr.length - 1;
  for (; currentIndex >= 0; currentIndex--) {
    let randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    // Swap values.
    let tmp = arr[randomIndex];
    arr[randomIndex] = arr[currentIndex];
    arr[currentIndex] = tmp;
    console.log(currentIndex);
  }
}

// Returns true if an rgb color is light, false if its dark.
// Consumes an object:color, that must have the following fields:
// red, green, and blue. Corresponding to the rgb color channels.
const isLight = (color) => {
  let brightness = (0.2126 * color.red) + (0.72152 * color.green) + (0.0722 * color.blue);
  return brightness > 127.5 ? true : false;
}

// Returns an object with the three channels 
// of an rgb color each of which has a random
// value.
const randomRgbColor = () => {
  let red = Math.floor(Math.random() * (255 + 1));
  let green = Math.floor(Math.random() * (255 + 1));
  let blue = Math.floor(Math.random() * (255 + 1));

  return {red, green, blue};
}

// Shuffles elements of the array.
shuffle(learners);

// Populate the article element with the contents
// of the array.
let article = document.querySelector("article");
for (learner of learners) {
  let section = document.createElement("section");
  let paragraph = document.createElement("p");
  let text = document.createTextNode(learner);

  let color = randomRgbColor(); 
  section.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;

  // Color the text white if it is in a dark
  // background.
  if (!isLight(color)) {
    section.style.color = "rgb(255, 255, 255)";
  }

  paragraph.appendChild(text);
  section.appendChild(paragraph);
  article.appendChild(section);
}
