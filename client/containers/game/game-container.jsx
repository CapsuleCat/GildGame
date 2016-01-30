import React from 'react';
import Reflux from 'reflux';

import {default as WinCount} from '../../components/game/win-count/win-count.jsx';
import {default as ActionArea} from '../../components/game/action-area/action-area.jsx';
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
      <div>
        <WinCount winCount={this.state.game.winCount} />

        <ActionArea
            readyToSummon={this.state.game.readyToSummon}
            readyToRoShamBo={this.state.game.readyToRoShamBo} />

        <ElementDashboard elements={this.state.game.elements} />
      </div>
    );
  }
});
