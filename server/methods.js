/* global Games */
Meteor.methods({
  beacon(gameId, playerId) {
    let updateObject = {};

    updateObject['lastBeacon' + playerId] = Number(new Date());
    updateObject['lastBeacon'] = Number(new Date());

    Games.update({
      _id: gameId
    }, {
      $set: updateObject
    });
  }
});

Meteor.startup(function () {
  /**
   * Delete old games if neither player has
   * sent a beacon in 5 seconds
   */
  Meteor.setInterval(function deleteOldGames() {
    /* 5 seconds */
    let date = Number(new Date()) - 5000;

    let oldGames = Games.find({
      lastBeacon1: {
        $lte: date
      },
      lastBeacon2: {
        $lte: date
      }
    }).fetch();

    oldGames.forEach((game) => {
      Games.remove({
        _id: game._id
      });
    });
  }, 2000);

  /**
   * Set games as cancelled if the last beacon
   * was 3 seconds ago from anyone
   */
  Meteor.setInterval(function cancelOldGames() {
    /* 5 seconds */
    let date = Number(new Date()) - 3000;

    let oldGames = Games.find({
      lastBeacon: {
        $lte: date
      }
    }).fetch();

    oldGames.forEach((game) => {
      Games.update({
        _id: game._id
      }, {
        $set: {
          cancelled: true
        }
      });
    });
  }, 2000);

  /**
   * Remove games where there was never a player 2
   * and the last beacon was 3 seconds ago
   */
  Meteor.setInterval(function cancelOldGames() {
    /* 5 seconds */
    let date = Number(new Date()) - 3000;

    let oldGames = Games.find({
      lastBeacon: {
        $lte: date
      },
      player2: ''
    }).fetch();

    oldGames.forEach((game) => {
      Games.remove({
        _id: game._id
      });
    });
  }, 2000);
});
