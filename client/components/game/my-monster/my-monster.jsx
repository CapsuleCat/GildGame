import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="game__my-monster">
        <img src={this.props.imageURL}/>
      </div>
    );
  }
});
