/* global elements, Games */
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
    this._readyToShowMonsters = false;

    this._generateElements();
  },

  onSetGame(gameId, playerId) {
    this._gameId = gameId;
    this._playerId = playerId;

    this._track();

    this.trigger(this.getInitialState());
  },

  onPick(index) {
    if (this._pickedElements.length < 2) {
      // remove element
      let element = this._elements.splice(index, 1)[0];

      // add it to picked elements
      this._pickedElements.push(element);

      // TRIGGER
      this.trigger(this.getInitialState());
    }
  },

  onSummon() {
    // send to server
    let updateObject = {};
    let player = 'player' + this._playerId;
    updateObject[player + 'Ready'] = true;
    updateObject[player + 'Elements'] = [
      this._pickedElements[0].name,
      this._pickedElements[1].name
    ];

    Games.update({
      _id: this._gameId
    }, {
      $set: updateObject
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
    };
  },

  _generateElements() {
    while (this._elements.length < TOTAL_ELEMENTS) {
      let element = Object.assign({}, Random.pick(elements));
      this._elements.push(element);
    }
  },

  _track() {
    Tracker.autorun(Meteor.bindEnvironment((/* computation */) => {
      let game = Games.findOne({
        _id: this._gameId
      });

      if ( typeof game !== 'undefined' &&
           game !== null ) {
        if (game.player1Ready && game.player2Ready) {
          this._readyToShowMonsters = true;
        }

        // Basically checking on the other player
      }

      this.trigger(this.getInitialState());
    }));
  }
});

export default {GameActions, GameStore};
