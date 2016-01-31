/* global monsters, elements */
var images = [];

function preload(imgArray) {
  for (let i = 0; i < imgArray.length; i++) {
    images[i] = new Image();
    images[i].src = imgArray[i];
  }
}

var listOfImages = [
  '/concepts/summon-ring-blue.png'
];

monsters.forEach((m) => {
  listOfImages.push(
    m.image
  );
});

elements.forEach((e) => {
  listOfImages.push(
    e.image
  );
});

preload(listOfImages);
