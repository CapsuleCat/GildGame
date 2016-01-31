import React from 'react';
import Reflux from 'reflux';

import {default as End} from '../components/game/end/end.jsx';

import {SceneActions} from '../actions/scene-actions';

import {default as Lobby} from '../components/lobby/lobby/lobby.jsx';

var SceneStore = Reflux.createStore({
  listenables: [ SceneActions ],

  init() {
    this._sceneId = null;
    this._scene = null;
  },

  onEnd(result) {
    this.transition(
      <End result={result}/>
    );
  },

  onHome() {
    this.transition(<Lobby />);
  },

  transition(scene) {
    this._scene = scene;
    this._sceneId = scene._rootNodeId;
    this.trigger(this._sceneId);
  },

  getInitialState() {
    if (this._scene === null) {
      let home = <Lobby />;
      this._sceneId = home._rootNodeID;
      this._scene = home;
    }

    return {
      sceneId: this._sceneId
    };
  },

  getScene() {
    return this._scene;
  }
});

export default {SceneStore};
