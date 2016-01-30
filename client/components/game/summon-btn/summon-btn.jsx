import React from 'react';

export default React.createClass({
  handleClick(e) {
    e.preventDefault();
    // TODO
  },

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Summon</button>
      </div>
    );
  }
});
