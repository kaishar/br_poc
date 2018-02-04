import React, { Component } from 'react';
import styles from './style.scss';

class PageHeader extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className={`${styles.page_header}`}>
        <span className={`${styles._left}`}>
          <span className={`${styles._title}`} title={'LaunchPad'}>LaunchPad</span>
        </span>
        <span className={`${styles._right}`} title={title}>{title}</span>
      </div>
    );
  }
}

export default PageHeader;
