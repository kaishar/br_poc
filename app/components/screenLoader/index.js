import React, { Component } from 'react';
import moment from 'moment';
import PageHeader from '../header/PageHeader';
import RetailView from './retailView';
import styles from './style.scss';

class ScreenLoader extends Component {
  render() {
    const { screenType } =  this.props;

    return (
      <div className={`${styles.screen_container}`}>
        <PageHeader title={screenType.label}/>
        <RetailView/>
      </div>
    );
  }
}

export default ScreenLoader;
