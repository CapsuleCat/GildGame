import React from 'react';
import ReactDOM from 'react-dom';

Meteor.startup(function () {
  ReactDOM.render(
    <div>Test</div>,
    document.getElementById('react-container')
  );
});
