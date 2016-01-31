import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.image}/>
        <span>{this.props.label}</span>
      </div>
    );
  }
});
