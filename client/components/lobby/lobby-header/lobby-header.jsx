import React from 'react';


export default React.createClass({
  handleClick(e) {
    //TODO
  },

  render() {
    <div>
      <input type="text" ref="username"/>

      <button onClick={this.handleClick}>+ Create Room</button>
    </div>
  }
});
