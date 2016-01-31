import React from 'react';

import {default as Game} from '../../game/game/game.jsx';

import {GameActions} from '../../../stores/game-store';
import {SceneActions} from '../../../actions/scene-actions';
import {LobbyActions} from '../../../stores/lobby-store';

import {audio} from "../../../audio";

export default React.createClass({

  handleClick(e) {
    e.preventDefault();

    audio.button.play();

    if (this.props.username.trim() === '') {
      return;
    }

    // join game
    LobbyActions.join(
      this.props.gameId,
      this.props.username
    );

    // transition screen
    SceneActions.transition(<Game />);
    
    GameActions.setGame(this.props.gameId, 2);
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
