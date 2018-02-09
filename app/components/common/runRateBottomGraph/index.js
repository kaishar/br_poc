import React, { Component } from 'react';
import ReactChart from 'react-highcharts';
import * as config from './config';
import styles from './style.scss';

class RunRateBottomChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData : {}
    };
  }

  render() {
    const { avgUpSell, avgChannelLog, clvWeighting } = this.props;
    const mapConfig = config.runRateBottomGraph;

    mapConfig.series[0].data = avgUpSell;
    mapConfig.series[1].data = avgChannelLog;
    mapConfig.series[2].data = clvWeighting;


    return (
      <div className={`${styles.map_container}`}>
        <ReactChart config={mapConfig} />
      </div>
    );
  }
}

export default RunRateBottomChart;
