import React from 'react';

import {default as Monster} from '../monster/monster.jsx';

export default React.createClass({
  render() {
    return (
      <div className="game__enemy">
        <Monster
          image={this.props.image}
          label={this.props.label} />
      </div>
    );
  }
});
