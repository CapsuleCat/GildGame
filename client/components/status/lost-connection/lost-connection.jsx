import React from 'react';

import {SceneActions} from '../../../actions/scene-actions';

import {audio} from '../../../audio';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

    audio.button.play();

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
