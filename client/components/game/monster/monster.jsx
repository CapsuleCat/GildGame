import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="game__monster">
        <img src={this.props.image} className="game__monster-img"/>
        <div className="game__monster-label"><span>{this.props.label}</span></div>
      </div>
    );
  }
});
