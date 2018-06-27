import React, { Component } from 'react';
import './ConferencesList.css';
import ConferenceDetail from './ConferenceDetail';

class ConferencesList extends Component {
  render() {
    return (
      <div className="conferences-list">
        <ConferenceDetail/>
      </div>
    );
  }
}

export default ConferencesList;