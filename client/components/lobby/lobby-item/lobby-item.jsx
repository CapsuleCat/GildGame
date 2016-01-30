import React from 'react';

export default React.createClass({

  handleClick(e) {
    //TODO
  },

  render() {
    <div>
      <span>{this.props.username}</span>

      <button onClick={this.handleClick}>Join</button>
    </div>
  }
});
