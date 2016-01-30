import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <span>Wins: {this.props.winCnt}</span>
      </div>
    );
  }
});
