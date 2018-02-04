import React, { Component } from 'react';
import styles from './style.scss';
import './react-table.scss';
import HighMaps from '../../common/highMaps';
import ReactTable from 'react-table';
import tableJson from '../../../data/tables/retail.json';

class RetailView extends Component {
  constructor() {
    super();
    this.state = {
      data : tableJson.tableData[0].data,
      header : tableJson.tableHeader
    };
  }
  render() {
    return (
      <div className={`${styles.retail_container}`}>
        <div className={`${styles.top}`}>
        </div>
        <div className={`${styles.bottom}`}>
          <HighMaps />
        </div>
      </div>
    );
  }
}

export default RetailView;
