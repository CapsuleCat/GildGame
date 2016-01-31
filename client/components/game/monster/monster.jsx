import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="game__monster">
        <img src={this.props.image} className="game__monster-img"/>
        <span>{this.props.label}</span>
      </div>
    );
  }
});
