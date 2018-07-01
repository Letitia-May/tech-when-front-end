import React, { Component } from 'react';
import './ConferencesList.css';
import ConferenceDetail from './ConferenceDetail';

class ConferencesList extends Component {
  render() {
    const data = {
      "name": "Code1",
      "displayStartDate": "19 Jul 2018",
      "displayEndDate": "10 Jul 2018",
      "city": "Melbourne",
      "website": "www.code1.com.au"
    };

    return (
      <div className="conferences-list">
        <ConferenceDetail conference={data}/>
      </div>
    );
  }
}


export default ConferencesList;