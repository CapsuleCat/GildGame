import React from 'react';

import {GameActions} from '../../../stores/game-store';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();
    
    GameActions.summon();
  },

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Summon</button>
      </div>
    );
  }
});
