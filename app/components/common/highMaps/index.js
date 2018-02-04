import React, { Component } from 'react';
import ReactHighmaps from 'react-highcharts/ReactHighmaps';
import * as config from './config';
import styles from './style.scss';

class HighMapsWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData : {}
    };
  }

  render() {
    const mapConfig = config.unitedKingdom;

    return (
      <div className={`${styles.map_container}`}>
        <ReactHighmaps config={mapConfig} />
      </div>
    );
  }
}

export default HighMapsWrapper;
