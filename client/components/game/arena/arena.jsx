import React from 'react';

import {default as MyMonster} from '../my-monster/my-monster.jsx';
import {default as EnemyMonster} from '../enemy-monster/enemy-monster.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <MyMonster
          imageURL={this.props.myMonster.imageURL}
          key={this.props.myMonster.monsterId}/>
        <EnemyMonster
          imageURL={this.props.enemyMonster.imageURL}
          key={this.props.enemyMonster.monsterId}/>
      </div>
    );
  }
});
