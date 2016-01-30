/* global elements */
import Reflux from 'reflux';

import {default as Random} from '../utils/random';

const TOTAL_ELEMENTS = 5;

const GameActions = Reflux.createActions([
  'pick'
]);

const GameStore = Reflux.createStore({
  listenables: [ GameActions ],

  init() {
    this._wins = 0;
    this._elements = [];
    this._pickedElements = [];

    this._generateElements();
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

  getInitialState() {
    return Object.assign(
      {},
      {
        winCount: this._wins,
        elements: this._elements,
        pickedElements: this._pickedElements
      },
      this._calculatedState()
    );
  },

  _calculatedState() {
    return {
      readyToRoShamBo: this._pickedElements.length === 2
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
