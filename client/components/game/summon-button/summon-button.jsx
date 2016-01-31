import React from 'react';

import {GameActions} from '../../../stores/game-store';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

    GameActions.summon();
  },

  render() {
    return (
      <div className="game__summon-btn">
        <button onClick={this.handleClick} className="gild-btn">Summon</button>
      </div>
    );
  }
});
