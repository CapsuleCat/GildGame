import React from 'react';

import {GameActions} from '../../../stores/game-store';

import {audio} from '../../../audio';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

    audio.summonButton.play();

    GameActions.summon();
  },

  render() {
    return (
      <div className="game__summon-btn-container">
        <div className="game__summon-btn-div">
          <button onClick={this.handleClick} className="gild-btn game__summon-btn">Summon</button>
        </div>
      </div>
    );
  }
});
