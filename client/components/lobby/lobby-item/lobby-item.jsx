import React from 'react';

export default React.createClass({

  handleClick(e) {
    e.preventDefault();
    // TODO
  },

  render() {
    return (
      <div>
        <span>{this.props.username}</span>

        <button onClick={this.handleClick}>Join</button>
      </div>
    );
  }
});
