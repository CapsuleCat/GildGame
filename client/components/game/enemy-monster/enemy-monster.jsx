import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="game__enemy">
        <img src={this.props.imageURL}/> // TODO Add CSS to flip this image
      </div>
    );
  }
});
