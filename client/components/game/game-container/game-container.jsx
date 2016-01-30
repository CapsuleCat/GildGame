import React from 'react';

import {default as SummoningRing} from '../summoning-ring/summoning-ring.jsx';
import {default as SummonBtn} from '../summoning-btn/summoning-btn.jsx';
import {default as Arena} from '../arena/arena.jsx';
import {default as WinCnt} from '../win-cnt/win-cnt.jsx';
import {default as ElementDashboard} from '../element-dashboard/element-dashboard.jsx';

export default React.createClass({
  render() {
    return (
      // TODO
      <div>
        // Required components
        <WinCnt winCnt={this.props.winCnt}/>
        <ElementDashboard/>

        // Conditional components
        <SummoningRing/>
        <SummonBtn/>
        <Arena/>
      </div>
    );
  }
});
