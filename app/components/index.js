import React, { Component } from 'react';

import AppHeader from './AppHeader';
import HighMaps from './HighMaps';
import MainHeader from './MainHeader';
import styles from './main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <AppHeader />
        <HighMaps />
      </div>
    );
  }
}

export default App;
