/* global elements, Games */
import Reflux from 'reflux';

import {SceneActions} from '../actions/scene-actions';

import {default as GameUtil} from '../utils/game';
import {default as Random} from '../utils/random';

import {audio} from '../audio';

const TOTAL_ELEMENTS = 5;

const GameActions = Reflux.createActions([
  'setGame',
  'pick',
  'summon',
  'endRound',
]);

/**
 * The data stored in the Game Store is:
 *
 * - gameId
 * - userName
 * - otherUserName
 */
const GameStore = Reflux.createStore({
  listenables: [ GameActions ],

  _softReset() {
    this._pickedElements = [];
    this._myMonster = null;
    this._otherMonster = null;

    this._readyToRoShamBo = false;
    this._readyToShowMonsters = false;

    this._generateElements();

    let updateObject = {};

    updateObject['player' + this._playerId + 'Ready'] = false;
    updateObject['player' + this._playerId + 'Elements'] = null;
    updateObject['player' + this._playerId + 'Monster'] = null;

    Games.update({
      _id: this._gameId
    }, {
      $set: updateObject
    });
  },

  init() {
    this._gameId = 0;
    this._playerId = 0;
    this._wins = 0;
    this._losses = 0;
    this._elements = [];

    this._softReset();
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

  onEndRound() {
    // Determine if we won
    let result = GameUtil.determineWinner(
      this._myMonster,
      this._otherMonster
    );

    // Increment our wins
    if (result === 'win') {
      this._wins++;
    }
    // Increment our loses
    if (result === 'lose') {
      this._losses++;
    }

    // If someone reached three, end
    if (this._wins >= 3 || this._losses >= 3) {
      // end
      var resultText = 'won';
      if (this._losses >= 3) {
        audio.lose.play();
        resultText = 'lost';
      }
      else {
        audio.win.play();
      }

      SceneActions.end(resultText);
      this.init();
    } else {
      // reset
      this._softReset();
    }

    this.trigger(this.getInitialState());
  },

  getInitialState() {
    return Object.assign(
      {},
      {
        winCount: this._wins,
        elements: this._elements,
        pickedElements: this._pickedElements,
        readyToRoShamBo: this._readyToRoShamBo,
        readyToShowMonsters: this._readyToShowMonsters,
        myMonster: this._myMonster,
        otherMonster: this._otherMonster
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

          // determine monsters
          this._myMonster = GameUtil.determineMonster(
            game['player' + this._playerId + 'Elements']
          );

          let otherPlayerNumber = 2;

          if (this._playerId === 2) {
            otherPlayerNumber = 1;
          }

          this._otherMonster = GameUtil.determineMonster(
            game['player' + otherPlayerNumber + 'Elements']
          );
        }

        // Basically checking on the other player
      }

      this.trigger(this.getInitialState());
    }));
  }
});

export default {GameActions, GameStore};
