import React from 'react';

import {default as MyMonster} from '../my-monster/my-monster.jsx';
import {default as EnemyMonster} from '../enemy-monster/enemy-monster.jsx';

export default React.createClass({
  render() {
    return (
      <div className="game__arena">
        <MyMonster
          label={this.props.myMonster.label}
          image={this.props.myMonster.image} />
        <EnemyMonster
          label={this.props.otherMonster.label}
          image={this.props.otherMonster.image} />
      </div>
    );
  }
});
