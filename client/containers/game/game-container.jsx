import React from 'react';
import Reflux from 'reflux';

import {default as WinCount} from '../../components/game/win-count/win-count.jsx';
import {default as ActionArea} from '../../components/game/action-area/action-area.jsx';
import {default as ElementDashboard} from '../../components/game/element-dashboard/element-dashboard.jsx';
import {default as Waiting} from '../../components/game/waiting/waiting.jsx';

import {LobbyStore} from '../../stores/lobby-store';
import {GameStore} from '../../stores/game-store';

export default React.createClass({
  mixins: [
    Reflux.connect(LobbyStore, 'lobby'),
    Reflux.connect(GameStore, 'game')
  ],

  componentDidMount() {
    $(window).resize(function () {
      $('.game__container').height($(window).height() - 150);
    });

    $(window).trigger('resize');
  }, // TODO: Remove event on unmount

  render() {
    if ( !this.state.lobby.hasOtherPlayer ) {
      return (<Waiting />);
    }

    return (
      <div>
        <div className="game__container">
          <WinCount winCount={this.state.game.winCount} />

          <ActionArea
              readyToSummon={this.state.game.readyToSummon}
              readyToRoShamBo={this.state.game.readyToRoShamBo}
              readyToShowMonsters={this.state.game.readyToShowMonsters}
              myMonster={this.state.game.myMonster}
              otherMonster={this.state.game.otherMonster} />

        </div>
        <ElementDashboard elements={this.state.game.elements} />
      </div>
    );
  }
});
