import React, { Component } from 'react';
import ReactChart from 'react-highcharts';
import * as config from './config';
import styles from './style.scss';

class RunRateChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData : {}
    };
  }

  render() {
    const mapConfig = config.runRateGraph;

    return (
      <div className={`${styles.map_container}`}>
        <ReactChart config={mapConfig} />
      </div>
    );
  }
}

export default RunRateChart;
