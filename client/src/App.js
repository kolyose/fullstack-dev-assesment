import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { Campaigns, CampaignDetails } from './components/campaigns';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <BrowserRouter>    
            <Switch>
              <Redirect exact from="/" to="/campaigns" />
              <Route exact path="/campaigns" component={ Campaigns } />
              <Route path="/campaigns/:id" component={ CampaignDetails } />
            </Switch>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
