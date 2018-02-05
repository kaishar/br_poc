import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import styles from './style.scss';

class SliderComp extends Component {
  render() {

    return (
      <div className={`${styles.slider_container}`}>
        <Slider />
    	<Range />
      </div>
    );
  }
}

export default SliderComp;
