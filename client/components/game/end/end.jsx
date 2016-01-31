import React from 'react';

export default React.createClass({
  // TODO
  render() {
    return (
      <div>
        <div>You have {this.props.result}</div>

        <button>Play Again?</button>
      </div>
    );
  }
});
