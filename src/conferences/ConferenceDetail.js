import React, { Component } from 'react';
import './ConferenceDetail.css';

class ConferenceDetail extends Component {
  render() {
    const {conference} = this.props;

    return (
      <div className="conference-detail">
        <p className="name">Conference: {conference.name}</p>
        <p className="startDate">Start date: {conference.displayStartDate}</p>
        <p className="endDate">End date: {conference.displayEndDate}</p>
        <p className="city">City: {conference.city}</p>
        <p className="website">Website: {conference.website}</p>
      </div>
		);
  }
}

export default ConferenceDetail;