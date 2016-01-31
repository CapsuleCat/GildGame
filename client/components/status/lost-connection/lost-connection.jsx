import React from 'react';

import {SceneActions} from '../../../actions/scene-actions';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

    SceneActions.home();
  },

  render() {
    return (
      <div className="game__lost-connection-container">
        <div className="game__lost-connection">
          <h3><div>Lost connection to other player</div></h3>

        <button className="gild-btn game__lost-connection-btn" onClick={this.handleClick}>Okay :(</button>
        </div>
      </div>
    );
  }
});
