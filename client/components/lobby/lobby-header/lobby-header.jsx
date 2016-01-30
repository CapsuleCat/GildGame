import React from 'react';


export default React.createClass({
  handleClick(e) {
    e.preventDefault();
    // TODO
  },

  render() {
    return (
      <div>
        <input type="text" ref="username"/>

        <button onClick={this.handleClick}>+ Create Room</button>
      </div>
    );
  }
});
