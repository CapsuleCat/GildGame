import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="game__win-cnt">
        <span>Wins: {this.props.winCount}</span>
      </div>
    );
  }
});
