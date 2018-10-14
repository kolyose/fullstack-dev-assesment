import React, { Component } from 'react';
import './App.css';

import ErrorBoundary from './components/ErrorBoundary';
import Campaigns from './components/campaigns';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Campaigns/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
