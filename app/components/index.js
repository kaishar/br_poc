import React, { Component } from 'react';

import AppHeader from './header/appHeader';
import ScreenLoader from './screenLoader';
import MenubarUpdates from './menubarUpdates';
import styles from './main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen : {
        id : 'retail_exec_view',
        label : 'Retail Executive View'
      }
    };

  }

  render() {
    return (
      <div>
        <AppHeader />
        <div className={styles.main__app__container}>
          <MenubarUpdates/>
          <ScreenLoader screenType={this.state.screen} />
        </div>
      </div>
    );
  }
}

export default App;
