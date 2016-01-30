var monsters = [
  {
     ingredients: ['blood', 'blood', 'basil']
  }
];

var player1sPicks = ["basil", "blood", "blood"]

var found = false;

for (var i = 0; i < monsters.length; i++) {
  var allMatch = true;
  for (var j = 0; j < player1sPicks.length; j++) {
    if (monsters[i].ingredients.indexOf(player1sPicks[j]) === -1) {
      allMatch = false;
      break;
    }
  }

  if (allMatch) {
    found = true;
    console.log(monsters[i]);
    break;
  }
}