import React, { Component } from 'react';
import moment from 'moment';
import styles from './style.scss';

class MainHeader extends Component {
  render() {
    return (
      <div className={`${styles.main_header}`}>
        <span className={`${styles._left}`}>
          <span className={`${styles._title}`}>Brightstar</span>
        </span>
        <span className={`${styles._right}`}>
          <span>Today: {moment().format('dddd MMMM DD YYYY')}</span>
          <span className={`${styles._user}`}>Kailash Sharma (Developer)</span>
          <span className={`${styles._logout}`}>| logout</span>
        </span>
      </div>
    );
  }
}

export default MainHeader;
