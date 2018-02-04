import React, { Component } from 'react';
import styles from './style.scss';

class ScreenLoader extends Component {
  render() {
    const { screenType } =  this.props;
    const updateData = [
      'Store operating at Drake St, Reading on 18 Nov 17',
      'GWP on VR h/set [SMA6] extended to 18 Nov 17',
      'LG G4  Mini [all colours] moves to EOL 18 Nov 17',
      'August Bank Holiday on 18 Nov 17 (Scotland only)',
    ];

    const announcements = () =>{
      return updateData.map((result) => {
        return (
          <div className={`${styles._items}`}>{`- ${result}` }</div>
        );
      });
    };

    return (
      <div className={`${styles.menubar_container}`}>
        <div className={`${styles._menu}`}>
        </div>
        <div className={`${styles._updates}`}>
          <div className={`${styles._header}`}/>
          <div className={`${styles._label}`}>
            <span className={`${styles._first}`}>Supply Chain</span>
            <span className={`${styles._second}`}>UPDATES</span>
          </div>
          <div className={`${styles._announcements}`}>
            {announcements()}
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenLoader;
