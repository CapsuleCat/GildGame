import Reflux from 'reflux';

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
    return {
      winCount: this._wins,
      elements: this._elements,
      pickedElements: this._pickedElements
    };
  },

  _generateElements() {
    // TODO pick 5 random elements
    // and copy them into this._elements

    
  }
});

export default {GameActions, GameStore};
