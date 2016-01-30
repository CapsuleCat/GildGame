import React from 'react';

// import {default as Title} from '../components/home/lobby/lobby.jsx';
// import {default as LobbyContainer} from '../containers/home/lobby-container.jsx';

let Title = () => {
  return <div></div>;
};

let LobbyContainer = () => {
  return <div></div>;
};

const HomePage = React.createClass({
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

export default HomePage;
