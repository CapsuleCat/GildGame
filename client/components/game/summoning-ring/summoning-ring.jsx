import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="game__summon-ring">
        <img src={this.props.imageURL}/>
      </div>
    );
  }
});
