import React from 'react';

import {default as SummoningRing} from '../summoning-ring/summoning-ring.jsx';
import {default as SummonButton} from '../summon-button/summon-button.jsx';
import {default as Arena} from '../arena/arena.jsx';

import {GameActions} from '../../../stores/game-store';

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

      this.otherTimer = setTimeout(() => {
        // TODO display who won
        // this.setState
        // TODO ugh refeactor
        var loses = newProps.myMonster.losesAgainst.indexOf(this.props.otherMonster.name) !== -1;
        var wins = newProps.myMonster.winsAgainst.indexOf(this.props.otherMonster.name) !== -1;
        var a;
        var b;

        if (loses) {
          a = newProps.otherMonster.label;
          b = newProps.myMonster.label;
        } else {
          a = newProps.myMonster.label;
          b = newProps.otherMonster.label;
        }

        var fightText = a + ' beats ' + b;

        if (!wins && !loses) {
          fightText = a + ' and ' + b + ' are in an eternal struggle';
        }

        this.setState({
          fightText
        });
      });

      this.timer = setTimeout(() => {
        GameActions.endRound();

        // clean up after ourselves
        this.timer = null;
        this.setState({
          fightText: ''
        });
      }, 10000);
    }
  },

  render() {
    let summonRing = <SummoningRing />;
    let summonButton = '';
    let arena = '';
    let fightText = '';

    if (this.props.readyToShowMonsters) {
      arena = (
        <Arena
            myMonster={this.props.myMonster}
            otherMonster={this.props.otherMonster}/>
      );
      summonRing = '';
    } else if (this.props.readyToSummon && !this.props.readyToRoShamBo) {
      summonButton = <SummonButton />;
    }

    if (this.state.fightText) {
      fightText = <p>{this.state.fightText}</p>;
    }

    return (
      <div>
        {fightText}
        {summonRing}
        {summonButton}
        {arena}
      </div>
    );
  }
});
