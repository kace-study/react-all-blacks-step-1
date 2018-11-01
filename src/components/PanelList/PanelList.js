import React, { Component } from 'react';
import Panel from '../Panel/Panel';

class PanelList extends Component {
  render() {
    return (
      <div className="panel-list">
        <div>
          <Panel />
          <Panel />
          <Panel />
        </div>
        <div>
          <Panel />
          <Panel />
          <Panel />
        </div>
        <div>
          <Panel />
          <Panel />
          <Panel />
        </div>
      </div>
    );
  }
}

export default PanelList;
