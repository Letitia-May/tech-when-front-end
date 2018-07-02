import React, { Component } from 'react';
import './App.css';
import ConferencesList from './conferences/ConferencesList';

class App extends Component {
  render() {
    const data = [{
      "name": "Code1",
      "displayStartDate": "19 Jul 2018",
      "displayEndDate": "10 Jul 2018",
      "city": "Melbourne",
      "website": "www.code1.com.au"
    }];

    return (
      <div className="app">
        <header className="app-header">
          <h1>TechWhen</h1>
        </header>
        <h2 className="page-title">Conferences</h2>
        <ConferencesList conferences={data}/>
      </div>
    );
  }
}

export default App;
