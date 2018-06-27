import React, { Component } from 'react';
import './App.css';
import ConferencesList from './conferences/ConferencesList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>TechWhen</h1>
        </header>
        <h2 className="page-title">Conferences</h2>
        <ConferencesList/>
      </div>
    );
  }
}

export default App;
