import {monsters} from '../../lib/data/monsters';

export default {
  determineMonster(ingredients) {
    let monster = monsters.find((m) => {
      if ((ingredients[0] === m.ingredients[0] &&
           ingredients[1] === m.ingredients[1]) ||
          (ingredients[0] === m.ingredients[1] &&
           ingredients[1] === m.ingredients[0])) {
        return true;
      }
    });

    return monster;
  },

  determineWinner(/* monsterA, monsterB */) {
    // TODO
  }
};
