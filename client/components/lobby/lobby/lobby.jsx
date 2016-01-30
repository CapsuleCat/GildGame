import React from 'react';

import {default as Title} from '../lobby-title/lobby-title.jsx';
import {default as LobbyContainer} from '../../../containers/lobby/lobby-container.jsx';

export default React.createClass({
  render() {
    return (
      <div className="lobby__lobby">
        <div>
          <Title />
          <LobbyContainer />
        </div>
      </div>
    );
  }
});
