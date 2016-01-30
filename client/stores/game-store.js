import Reflux from 'reflux';

const GameActions = Reflux.createActions([

]);

const GameStore = Reflux.createStore({
  listenables: [ GameActions ],

  init() {

  },

  getInitialState() {
    return {

    };
  }
});

export default {GameActions, GameStore};
