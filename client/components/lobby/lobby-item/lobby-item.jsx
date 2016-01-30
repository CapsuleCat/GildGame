import React from 'react';

import {default as Game} from '../../game/game/game.jsx';

import {SceneActions} from '../../../stores/scene-store.jsx';
import {LobbyActions} from '../../../stores/lobby-store';

export default React.createClass({

  handleClick(e) {
    e.preventDefault();

    // TODO join game
    LobbyActions.join(
      this.props.gameId,
      this.props.username
    );

    // transition screen
    SceneActions.transition(<Game />);
  },

  render() {
    return (
      <div>
        <span>{this.props.otherUsername}</span>

        <button onClick={this.handleClick}>Join</button>
      </div>
    );
  }
});
