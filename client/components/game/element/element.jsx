import React from 'react';

import {GameActions} from '../../../stores/game-store';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();

    GameActions.pick(this.props.index);
  },

  render() {
    return (
      <div onClick={this.handleClick}>
        <image src={this.props.image}/>
        <span>{this.props.label}</span>
      </div>
    );
  }
});
