import React, { Component } from 'react';
import './ConferencesList.css';
import ConferenceDetail from './ConferenceDetail';

class ConferencesList extends Component {
  render() {
    const {conferences} = this.props;

    return (
      <div className="conferences-list">
         {Object.keys(conferences).length > 0 && <ConferenceDetail conference={conferences}/>}
      </div>
    );
  }
}


export default ConferencesList;