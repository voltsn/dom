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

// Generates a random number between min and max
// inclusive.
const randNumber = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Shuffles the contents of an array using the Fisher-Yates
// shuffle algorithm.
const shuffle = (arr) => {
  let cursor = arr.length - 1;
  for (; cursor >= 0; cursor--) {
    let randomIndex = randNumber(cursor, 0);

    // Swap values.
    let tmp = arr[randomIndex];
    arr[randomIndex] = arr[cursor];
    arr[cursor] = tmp;
  }
}

// Returns true if an rgb color is light, false if its dark.
// Consumes an object:color, that must have the following fields:
// red, green, and blue. Corresponding to the rgb color channels.
const isLight = (color) => {
  let brightness = (0.2126 * color.red) + (0.72152 * color.green) + (0.0722 * color.blue);
  return brightness > 155;
}

// Returns an object with the three channels 
// of an rgb color each of which has a random
// value.
const randomRgbColor = () => {
  let red = randNumber(255,0);
  let green = randNumber(255, 0);
  let blue = randNumber(255, 0);

  return {red, green, blue};
}

const main = () => {
  // Shuffles elements of the array.
  shuffle(learners);
  
  // Populate the article element with the contents
  // of the array.
  let article = document.querySelector("article");
  for (learner of learners) {
    let section = document.createElement("section");
    let paragraph = document.createElement("p");
    let learnersName = document.createTextNode(learner);
    let color = randomRgbColor(); 

    section.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;

    // Color the text white if it is in a dark
    // background.
    if (!isLight(color)) {
      section.style.color = "rgb(255, 255, 255)";
    }

    paragraph.appendChild(learnersName);
    section.appendChild(paragraph);
    article.appendChild(section);
  }
}

main();
