const { describe, it } = global;

import {expect} from 'chai';
import {default as GameUtil} from '../game';

describe('game utilities', () => {
  it('determines the correct monster', () => {
    const winMap = [
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
      }
    ];

    winMap.forEach((test) => {
      let monster = GameUtil.determineMonster(
        test.ingredients
      );

      expect(monster.name).to.be.equal(
        test.expectedMonster
      );

      // // Test the inverse
      // monster = gameUtil.determineMonster(
      //   test.ingredients
      // );

      // expect(monster.label).to.be.equal(
      //   test.expectedMonster
      // );
    });
  });
});
