import React, { Component } from 'react';
import Hello from './hello';
import Bye from './bye';

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Bye />
      </div>
    );
  }
}

export default App;
