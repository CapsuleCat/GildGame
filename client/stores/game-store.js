import Reflux from 'reflux';

const GameActions = Reflux.createActions([

]);

const GameStore = Reflux.createStore({
  listenables: [ GameActions ],

  init() {
    this._wins = 0;
    this._elements = [];

    this._generateElements();
  },

  getInitialState() {
    return {
      winCount: this._wins,
      elements: this._elements
    };
  },

  _generateElements() {
    // TODO pick 5 random elements
    // and copy them into this._elements
  }
});

export default {GameActions, GameStore};
