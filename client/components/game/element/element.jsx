import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <image source="{this.props.imageURL}"/>
      </div>
    );
  }
});
