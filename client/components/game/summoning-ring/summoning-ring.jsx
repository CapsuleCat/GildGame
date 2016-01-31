import React from 'react';

// TODO will need to be able to add elements
export default React.createClass({
  render() {
    return (
      <div className="game__summon-ring">
        <img src={this.props.imageURL}/>
      </div>
    );
  }
});
