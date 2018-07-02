import React, { Component } from 'react';
import './ConferencesList.css';
import ConferenceDetail from './ConferenceDetail';

class ConferencesList extends Component {
  render() {
    const {conferences} = this.props;

    return (
      <div className="conferences-list">
         {conferences.length > 0 && <ConferenceDetail conference={conferences[0]}/>}
      </div>
    );
  }
}


export default ConferencesList;