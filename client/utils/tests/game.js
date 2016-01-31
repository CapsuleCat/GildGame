const { describe, it } = global;
import {monsters} from '../../../lib/data/monsters';

import {expect} from 'chai';
import {default as GameUtil} from '../game';

describe('game utilities', () => {
  const ingredientsMap = [
    {
      ingredients: [ 'BloodOfVirgin', 'EyeOfEnemy' ],
      expectedMonster: 'Ooze'
    },
    {
      ingredients: [ 'BloodOfVirgin', 'BasilPetal' ],
      expectedMonster: 'Soup'
    },
    {
      ingredients: [ 'BasilPetal', 'BasilPetal' ],
      expectedMonster: 'Basil'
    },
    {
      ingredients: [ 'EyeOfEnemy', 'BasilPetal' ],
      expectedMonster: 'Fairy'
    }
  ];

  const winMap = [
    {
      monsterA: 'Ooze',
      monsterB: 'Soup',
      result: 'win'
    }, {
      monsterA: 'Ooze',
      monsterB: 'Basil',
      result: 'win'
    }, {
      monsterA: 'Skeleton',
      monsterB: 'Fish',
      result: 'win'
    }, {
      monsterA: 'T-Rex',
      monsterB: 'Golem',
      result: 'win'
    }
  ];

  const monsterHelper = function (name) {
    return monsters.find((m) => {
      return m.name === name;
    });
  };

  it('determines the correct monster', () => {
    ingredientsMap.forEach((test) => {
      let monster = GameUtil.determineMonster(
        test.ingredients
      );

      expect(monster.name).to.be.equal(
        test.expectedMonster
      );
    });
  });

  it('determines the correct monster when reversed', () => {
    ingredientsMap.forEach((test) => {
      let monster = GameUtil.determineMonster(
         Array.prototype.slice.call(test.ingredients).reverse()
      );

      expect(monster.name).to.be.equal(
        test.expectedMonster
      );
    });
  });

  it('determines the correct winner', () => {
    winMap.forEach((test) => {
      let result = GameUtil.determineWinner(
        monsterHelper(test.monsterA),
        monsterHelper(test.monsterB)
      );

      expect(result).to.be.equal(
        'win'
      );
    });
  });

  it('determines the correct loser', () => {
    winMap.forEach((test) => {
      let result = GameUtil.determineWinner(
        monsterHelper(test.monsterB),
        monsterHelper(test.monsterA)
      );

      expect(result).to.be.equal(
        'lose'
      );
    });
  });
});
