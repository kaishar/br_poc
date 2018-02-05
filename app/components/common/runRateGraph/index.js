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
    const { activations, shipments } = this.props;
    const mapConfig = config.runRateGraph;

    mapConfig.series[0].data = shipments;
    mapConfig.series[1].data = activations;

    return (
      <div className={`${styles.map_container}`}>
        <ReactChart config={mapConfig} />
      </div>
    );
  }
}

export default RunRateChart;
