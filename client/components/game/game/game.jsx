import React from 'react';

import {default as GameContainer} from '../../../containers/game/game-container.jsx';

export default React.createClass({
  render() {
    return (
      <div className="game__game">
        <GameContainer />
      </div>
    );
  }
});
