import React, { Component } from 'react';
import './App.css';

import Campaigns from './components/campaigns';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Campaigns/>
      </div>
    );
  }
}

export default App;
