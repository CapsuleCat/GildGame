import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.imageURL}/> // TODO Add CSS to flip this image
      </div>
    );
  }
});
