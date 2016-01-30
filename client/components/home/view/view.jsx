import React from 'react';

// import {default as Title} from '../components/home/lobby/lobby.jsx';
// import {default as LobbyContainer} from '../containers/home/lobby-container.jsx';

// TODO move
let Title = () => {
  return <div></div>;
};

// TODO move
let LobbyContainer = () => {
  return <div></div>;
};

const View = React.createClass({
  componentDidMount() {

  },

  render() {
    return (
      <div className="home-page">
        <Title />

        <LobbyContainer />
      </div>
    );
  }
});

export default View;
