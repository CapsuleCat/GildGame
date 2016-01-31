import React from 'react';

import {SceneActions} from '../../../actions/scene-actions';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

    SceneActions.home();
  },

  render() {
    return (
      <div>
        <div>Lost Connection to other player</div>

        <button onClick={this.handleClick}>Okay :(</button>
      </div>
    );
  }
});
