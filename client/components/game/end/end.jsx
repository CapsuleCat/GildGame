import React from 'react';

import {SceneActions} from '../../../actions/scene-actions';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

    SceneActions.home();
  },

  render() {
    return (
      <div className="game__end-container">
        <div className="game__end">
          <h3><div>You have {this.props.result}</div></h3>

          <button onClick={this.handleClick} className="gild-btn game__end-btn">Play Again?</button>
        </div>
      </div>
    );
  }
});
