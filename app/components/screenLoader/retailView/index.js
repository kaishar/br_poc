import React, { Component } from 'react';
import styles from './style.scss';
import HighMaps from '../../common/highMaps';
import RunRateGraph from '../../common/runRateGraph';
import ReactTable from 'react-table';
import tableJson from '../../../data/tables/retail.json';

class RetailView extends Component {
  constructor() {
    super();
    this.state = {
      header : tableJson.tableHeader,
      sortOptions : tableJson.sortOptions,
      selectedSorted : 'EM'
    };
    this.sortingChange = this.sortingChange.bind(this);
  }

  sortingChange(val) {
    this.setState({ selectedSorted : val });
  }
  render() {
    let tableData = _.find(tableJson.tableData, { 'code' : this.state.selectedSorted });
    let activations = _.sortBy(_.map(tableData.data, 'total')),
      shipments = _.sortBy(_.map(tableData.data, 'quantity')); 

    return (
      <div className={`${styles.retail_container}`}>
        <div className={`${styles._search_bar}`}>
          <div>
            <span className={`${styles._label}`}>Performance</span>
            <span className={`${styles._sorting_container}`}>
              <select
                className={`${styles._dropdown}`}
                name="listSortBy"
                value={this.state.selectedSorted}
                onChange={(event) => this.sortingChange(event.target.value)}>
                {
                  this.state.sortOptions.map((option) => {
                    return <option key={`__${option.value}`} id={option.value} value={option.value}>{option.name}</option>;
                  })
                }
              </select>
            </span>
          </div>
        </div>
        <div className={`${styles._top}`}>
          <div className={`${styles._table}`}>
            <ReactTable
              data={tableData.data}
              columns={this.state.header}
              className="-highlight react_custom"
              showPagination={false}
              minRows={7}
            />
          </div>
          <div className={`${styles._projected}`}>
          </div>
          <div className={`${styles._slider}`}>
          </div>
        </div>
        <div className={`${styles._bottom}`}>
          <RunRateGraph activations={activations} shipments={shipments}/>
          <HighMaps />
        </div>
      </div>
    );
  }
}

export default RetailView;
