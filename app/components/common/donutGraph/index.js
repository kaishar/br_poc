import React, { Component } from 'react';
import ReactChart from 'react-highcharts';
import * as config from './config';
import styles from './style.scss';

class DonutGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapData : {}
    };
  }

  render() {
    const { totalSoh } = this.props;
    const mapConfig = config.donutGraph;

    //mapConfig.series[0].data = totalSoh;

    return (
      <div className={`${styles.map_container}`}>
        <ReactChart config={mapConfig} />
      </div>
    );
  }
}

export default DonutGraph;
