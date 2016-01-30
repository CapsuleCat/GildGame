import React from 'react';

import {default as Element} from '../element/element.jsx';

export default React.createClass({
  render() {
    return (
        <div>
          {this.props.elements.map((element, i) => {
            return <Element key={i} imageURL={element.imageURL}/>;
          })}
        </div>
    );
  }
});
