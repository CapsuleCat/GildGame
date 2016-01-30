import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.imageURL}/>
        // TODO will need to be able to add elements
      </div>
    );
  }
});
