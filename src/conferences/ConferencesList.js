import React, { Component } from 'react';
import './ConferencesList.css';
import ConferenceDetail from './ConferenceDetail';

class ConferencesList extends Component {
  render() {
    const {conferences} = this.props;

    return (
      <div className="conferences-list">
        {conferences.map(function(conf, index) {
          return conferences.length > 0 && <ConferenceDetail key={index} conference={conf}/>
        })}
      </div>
    );
  }
}


export default ConferencesList;