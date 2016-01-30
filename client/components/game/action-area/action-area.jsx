import React from 'react';

import {default as SummoningRing} from '../summoning-ring/summoning-ring.jsx';
import {default as SummonButton} from '../summon-button/summon-button.jsx';
// import {default as Arena} from '../arena/arena.jsx';


export default React.createClass({
  render() {
    let summonRing = <SummoningRing />
    let summonButton = '';
    let arena = '';

    if (this.props.readyToRoShamBo) {
      summonButton = <SummonButton />
    }

    // TODO

    return (
      <div>
        {summonRing}
        {summonButton}
        {arena}
      </div>
    );
  }
});
