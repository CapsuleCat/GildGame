/* global Games */
import Reflux from 'reflux';

const LobbyActions = Reflux.createActions([
  'create',
  'join',
  'updateUserName',
  'leave'
]);

const LobbyStore = Reflux.createStore({
  listenables: [ LobbyActions ],

  init() {
    this._lobbies = [];
    this._lobby = {
      gameId: null,
      userName: '',
      otherUserName: ''
    };

    this._track();

    this.trigger(this.getInitialState());
  },

  onCreate(username, callback) {
    const id = Games.insert({
      player1: username
    });

    this._lobby.userName = username;
    this._lobby.gameId = id;

    callback(id);

    this.trigger(this.getInitialState());
  },

  onJoin(gameId, username) {
    let game = Games.findOne({
      _id: gameId
    });

    Games.update({
      _id: gameId
    }, {
      $set: {
        player2: username
      }
    });

    this._lobby.userName = username;
    this._lobby.otherUserName = game.player1;
    this._lobby.gameId = gameId;

    this.trigger(this.getInitialState());
  },

  onUpdateUserName(username) {
    this._lobby.userName = username;

    this.trigger(this.getInitialState());
  },

  onLeave() {
    let game = Games.findOne({
      _id: this._lobby.gameId
    });

    if ( game ) {
      // Figure out who is leaving
      let leaveObject = {};

      if ( game._lobby.userName === game.player1 ) {
        leaveObject.player1 = null;
      } else {
        leaveObject.player2 = null;
      }

      Games.update({
        _id: this._lobby.gameId
      }, {
        $set: leaveObject
      });
    }

    this._lobby.gameId = null;
    this._lobby.otherUserName = '';

    this.trigger(this.getInitialState());
  },

  getInitialState() {
    let calculatedState = this._calculateState(
        this._lobby
    );

    return Object.assign(
      {},
      this._lobby,
      calculatedState,
      { lobbies: this._lobbies }
    );
  },

  _track() {
    Tracker.autorun(Meteor.bindEnvironment((/* computation */) => {
      let games = Games.find({
        player2: null
      }).fetch();

      this._lobbies = games;

      let game = Games.findOne({
        _id: this._lobby.gameId
      });

      if ( typeof game !== 'undefined' &&
           game !== null ) {
        /*
         * username is not necessarily player1
         * otherUserName is not necessarily player2
         */
        if ( this._lobby.userName !== game.player1 ) {
          this._lobby.otherUserName = game.player1;
        } else {
          this._lobby.otherUserName = game.player2;
        }
      }

      this.trigger(this.getInitialState());
    }));
  },

  _calculateState(state) {
    return {
      isInLobby: (state.gameId !== null),
      hasOtherPlayer: Boolean(state.otherUserName)
    };
  }
});

export default { LobbyActions, LobbyStore };
