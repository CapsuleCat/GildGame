import React from 'react';

import {default as LobbyList} from '../lobby-list/lobby-list.jsx';
import {default as LobbyHeader} from '../lobby-header/lobby-header.jsx';

export default React.createClass({
  render() {
    return {
      <div>
        <LobbyHeader/>
        <LobbyList/>
        //TODO
      </div>
    }
  }
});
