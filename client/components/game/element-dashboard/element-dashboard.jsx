import React from 'react';

import {default as Element} from '../element/element.jsx';

export default React.createClass({
  render() {
    return (
        <div className="game__dashboard">
          <div className="game__element-container"
          {this.props.elements.map((element, i) => {
            return <Element
                key={i}
                index={i}
                label={element.label}
                image={element.image}/>;
          })}
        </div>
    );
  }
});
