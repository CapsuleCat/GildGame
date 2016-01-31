import React from 'react';

import {GameActions} from '../../../stores/game-store';

import {audio} from '../../../audio';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

    audio.elementIcon.play();

    GameActions.pick(this.props.index);
  },

  render() {
    return (
      <div onClick={this.handleClick} className="game__element-div">
        <image className="game__element" src={this.props.image}/>
        <div className="game__element-name">
          <span>{this.props.label}</span>
        </div>
      </div>
    );
  }
});
