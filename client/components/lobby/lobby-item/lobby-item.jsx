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
      <div className="clearfix">
        <div className="lobby__item">
          <span className="lobby__item-username">{this.props.otherUsername}</span>

          <button className="gild-btn lobby__item-btn" onClick={this.handleClick}>Join</button>
        </div>
      </div>
    );
  }
});
