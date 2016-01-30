import React from 'react';
import Reflux from 'reflux';

import {default as LobbyList} from '../../components/lobby/lobby-list/lobby-list.jsx';
import {default as LobbyHeader} from '../../components/lobby/lobby-header/lobby-header.jsx';
import {LobbyStore} from '../../stores/lobby-store';

export default React.createClass({
  mixins: [ Reflux.connect(LobbyStore, 'lobby') ],

  render() {
    return (
      <div>
        <LobbyHeader/>
        <LobbyList games={this.state.lobby.lobbies}/>
      </div>
    );
  }
});
