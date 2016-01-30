import React from 'react';
import Reflux from 'reflux';

import {default as SummoningRing} from '../../components/game/summoning-ring/summoning-ring.jsx';
import {default as SummonButton} from '../../components/game/summon-button/summon-button.jsx';
import {default as Arena} from '../../components/game/arena/arena.jsx';
import {default as WinCount} from '../../components/game/win-count/win-count.jsx';
import {default as ElementDashboard} from '../../components/game/element-dashboard/element-dashboard.jsx';
import {default as Waiting} from '../../components/game/waiting/waiting.jsx';

import {LobbyStore} from '../../stores/lobby-store';
import {GameStore} from '../../stores/game-store';

export default React.createClass({
  mixins: [
    Reflux.connect(LobbyStore, 'lobby'),
    Reflux.connect(GameStore, 'game')
  ],

  render() {
    if ( !this.state.lobby.hasOtherPlayer ) {
      return (<Waiting />);
    }

    return (
      // TODO
      <div>
        // Required components
        <WinCount winCount={this.state.game.winCount}/>
        <ElementDashboard/>

        // Conditional components
        <SummoningRing/>
        <SummonButton/>
        <Arena/>
      </div>
    );
  }
});
