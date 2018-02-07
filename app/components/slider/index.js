import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import styles from './style.scss';

class SliderComp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      min : 0,
      max : 100,
      selected : 0,
      customHandle : {
        'position' : 'absolute',
        'cursor' : 'pointer',
        'width' : '10px',
        'height' : '20px',
        'border' : '1px solid #403939',
        'borderRadius' : '1px',
        'backgroundColor' : '#808080fa',
        'margin-top' : '-8px'
      }
    };
    this.sliderUpdate = this.sliderUpdate.bind(this);
  }

  sliderUpdate(value) {
    this.setState({ selected : value });
  }

  render() {
    const marks = {
      0 : { style : { 'color' : 'black', 'margin-top' : '-18px' }, label : '' }, 
      10 : '', 
      20 : '', 
      30 : '', 
      40 : '', 
      50 : '',
      60 : '', 
      70 : '', 
      80 : '', 
      90 : '', 
      100 : ''
    };

    return (
      <div className={`${styles.slider_container}`}>
        <div className={`${styles._label_input}`}>
          <span className={`${styles.__label}`}>CLV weighting</span>
          <div>
            <input
              type={'number'}
              className={`${styles.__input}`}
              min={0}
              max={100}
              value={this.state.selected}
              onChange={(event) => this.sliderUpdate(event.target.value)}/>
            <span>{'  %'}</span>
          </div>
        </div>
        <Slider 
          value={this.state.selected} 
          min={this.state.min} 
          max={this.state.max} 
          onChange={this.sliderUpdate} 
          trackStyle={{ backgroundColor : '#808080fa' }}
          handleStyle={this.state.customHandle}/>
        <span>Impacted Volume:   {this.state.selected} %</span>
      </div>
    );
  }
}

export default SliderComp;
