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
});
