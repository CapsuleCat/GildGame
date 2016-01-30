import React from 'react';

import {default as LobbyItem} from '../lobby-item/lobby-item.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.games.map((game) => {
          return <LobbyItem username={game.player1} key={game._id}/>;
        })}
      </div>
    );
  }
});
