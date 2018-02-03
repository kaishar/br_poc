import React, { Component } from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';
import * as config from './config';

class HighMapsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData : {}
    };
  }

  render() {
    const mapConfig = config.unitedKingdom;
    const divStyle = {
      'width' : '50%'
    };

    return (
      <div style={divStyle}>
        <ReactHighmaps config={mapConfig} />
      </div>
    );
  }
}

export default HighMapsWrapper;
