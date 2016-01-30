import React from 'react';
import Reflux from 'reflux';

import {LobbyStore} from '../../stores/lobby-store';

export default React.createClass({
  mixins: [ Reflux.connect(LobbyStore, 'lobby') ],

  render() {
    return (
      <div>
        Lobby Store

        Current game state:

        <span>{this.props.lobby.gameId}</span>
      </div>
    );
  }
});
