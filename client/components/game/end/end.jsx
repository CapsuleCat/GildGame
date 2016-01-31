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
        <div>You have {this.props.result}</div>

        <button onClick={this.handleClick}>Play Again?</button>
      </div>
    );
  }
});
