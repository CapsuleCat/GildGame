var images = new Array()

function preload(imgArray) {
  for (i = 0; i < imgArray.length; i++) {
    images[i] = new Image()
    images[i].src = imgArray[i]
  }
}

var listOfImages = [];

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
