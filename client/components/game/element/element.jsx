import React from 'react';

import {GameActions} from '../../../stores/game-store';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

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
