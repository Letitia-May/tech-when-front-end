import React, { Component } from 'react';
import './App.css';
import ConferencesList from './conferences/ConferencesList';
import { findAll } from './conferencesRepository';
import { request } from './request';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }

  componentDidMount() {
    findAll(request)
      .then(conferences => {
        this.setState(conferences);
      });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>TechWhen</h1>
        </header>
        <h2 className="page-title">Conferences</h2>
        <ConferencesList conferences={this.state.data}/>
      </div>
    );
  }
}

export default App;
