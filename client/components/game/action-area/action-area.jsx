import React from 'react';

import {default as SummoningRing} from '../summoning-ring/summoning-ring.jsx';
import {default as SummonButton} from '../summon-button/summon-button.jsx';
import {default as Arena} from '../arena/arena.jsx';


export default React.createClass({
  propTypes: {
    readyToSummon: React.PropTypes.bool
  },

  render() {
    let summonRing = <SummoningRing />;
    let summonButton = '';
    let arena = '';

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

    return (
      <div>
        {summonRing}
        {summonButton}
        {arena}
      </div>
    );
  }
});
