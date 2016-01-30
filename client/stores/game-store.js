/* global elements */
import Reflux from 'reflux';

import {default as Random} from '../utils/random';

const TOTAL_ELEMENTS = 5;

const GameActions = Reflux.createActions([
  'setGame',
  'pick',
  'summon',
]);

const GameStore = Reflux.createStore({
  listenables: [ GameActions ],

  init() {
    this._gameId = 0;
    this._playerId = 0;
    this._wins = 0;
    this._elements = [];
    this._pickedElements = [];
    this._readyToRoShamBo = false;

    this._generateElements();
  },

  onSetGame(gameId, playerId) {
    this._gameId = gameId;
    this._playerId = playerId;

    this.trigger(this.getInitialState());
  },

  onPick(index) {
    if (this._pickedElements.length < 2) {
      // remove element
      let element = this._elements.splice(index, 1);

      // add it to picked elements
      this._pickedElements.push(element);

      // TRIGGER
      this.trigger(this.getInitialState());
    }
  },

  onSummon() {
    // TODO send to server
    Games.update({
      _id: this._gameId
    }, {
      $set: {
        // player1Ready: true
        // player1Elements: [
        // 'asdf',
        // 'asdf'
        //]
      }
    });

    // set ready
    this._readyToRoShamBo = true;

    // TRIGGER
    this.trigger(this.getInitialState());
  },

  getInitialState() {
    return Object.assign(
      {},
      {
        winCount: this._wins,
        elements: this._elements,
        pickedElements: this._pickedElements,
        readyToRoShamBo: this._readyToRoShamBo
      },
      this._calculatedState()
    );
  },

  _calculatedState() {
    return {
      readyToSummon: this._pickedElements.length === 2
    }
  },

  _generateElements() {
    while (this._elements.length < TOTAL_ELEMENTS) {
      let element = Object.assign({}, Random.pick(elements));
      this._elements.push(element);
    }
  }
});

export default {GameActions, GameStore};
