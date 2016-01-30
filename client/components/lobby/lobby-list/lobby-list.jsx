import React from 'react';

import {default as LobbyItem} from '../lobby-item/lobby-item.jsx';

export default React.createClass({
  getDefaultProps() {
    return {
      username: 'No name',
      games: []
    };
  },

  render() {
    return (
      <div>
        {this.props.games.map((game) => {
          return (
            <LobbyItem
                username={this.props.username}
                gameId={game._id}
                otherUsername={game.player1}
                key={game._id}/>
          );
        })}
      </div>
    );
  }
});
