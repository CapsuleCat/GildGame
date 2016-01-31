import React from 'react';
import generateName from 'sillyname';

import {default as Game} from '../../game/game/game.jsx';

import {GameActions} from '../../../stores/game-store';
import {SceneActions} from '../../../actions/scene-actions';
import {LobbyActions} from '../../../stores/lobby-store';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

    const username = this.refs.username.value;

    if (username.trim() === '') {
      return;
    }

    LobbyActions.create(username, (gameId) => {
      GameActions.setGame(
        gameId,
        1
      );
    });
    console.log(SceneActions);
    SceneActions.transition(<Game />);
  },

  handleChange() {
    const username = this.refs.username.value;

    LobbyActions.updateUserName(username);
  },

  render() {
    if (typeof this.givenName === 'undefined' || this.givenName === null) {
      this.givenName = generateName();
      LobbyActions.updateUserName(this.givenName);
    }

    return (
      <div className="clearfix lobby__lobby-header">
        <div>
          <label
              htmlFor="username"
              className="lobby__lobby-header--usernameLabel">
              Username
          </label>
          <input
              className="lobby__lobby-header--usernameInput"
              onChange={this.handleChange}
              defaultValue={this.givenName}
              id="username"
              type="text"
              ref="username" />
        </div>

        <button
          className="gild-btn lobby__lobby-header--btn"
          onClick={this.handleClick}>+ Create Room</button>
      </div>
    );
  }
});
