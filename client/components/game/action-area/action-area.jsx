import React from 'react';

import {default as SummoningRing} from '../summoning-ring/summoning-ring.jsx';
import {default as SummonButton} from '../summon-button/summon-button.jsx';
import {default as Arena} from '../arena/arena.jsx';
import {default as Monster} from '../monster/monster.jsx';

import {audio} from '../../../audio';

import {default as GameUtil} from '../../../utils/game';

import {GameActions, GameStore} from '../../../stores/game-store';

// TODO this Action Area is really
// and Action Area Container
export default React.createClass({
  getInitialState() {
    return {
      fightText: ''
    };
  },

  propTypes: {
    readyToSummon: React.PropTypes.bool
  },

  componentWillReceiveProps(newProps) {
    if (newProps.readyToShowMonsters) {
      if (this.timer) {
        return;
      }

      audio.summon.play();

      this.otherTimer = setTimeout(() => {
        // Display who won
        let result = GameUtil.determineWinner(
          newProps.myMonster,
          newProps.otherMonster
        );

        var a;
        var b;

        if (result === 'lose') {
          a = newProps.otherMonster.label;
          b = newProps.myMonster.label;
        } else {
          a = newProps.myMonster.label;
          b = newProps.otherMonster.label;
        }

        var fightText = a + ' beats ' + b;

        if (result === 'draw') {
          fightText = a + ' and ' + b + ' are in an eternal struggle';
        }

        this.setState({
          fightText
        });
      }, 3000);

      this.timer = setTimeout(() => {
        // clean up after ourselves
        this.timer = null;
        this.setState({
          fightText: ''
        });

        GameActions.endRound();
      }, 8000);
    }
  },

  render() {
    let summonRing = <SummoningRing />;
    let summonButton = '';
    let arena = '';
    let fightText = '';
    let monster = '';

    if (this.props.readyToShowMonsters) {
      arena = (
        <Arena
            myMonster={this.props.myMonster}
            otherMonster={this.props.otherMonster}/>
      );
      summonRing = '';
    } else if (this.props.readyToSummon && !this.props.readyToRoShamBo) {
      summonButton = <SummonButton />;
    } else if (this.props.readyToRoShamBo) {
      let myMonster = GameStore.getMyMonster();
      monster = <div className="game__monster-preview"><Monster image={myMonster.image} label={myMonster.label}/></div>;
    }

    if (this.state.fightText) {
      fightText = <p>{this.state.fightText}</p>;
    }

    return (
      <div className="game__action-area">
        {fightText}
        {summonRing}
        {summonButton}
        {arena}
        {monster}
      </div>
    );
  }
});
