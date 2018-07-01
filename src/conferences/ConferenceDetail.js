import React, { Component } from 'react';

class ConferenceDetail extends Component {
  render() {
		const {conference} = this.props;

    return (
      <div className="conference-detail">
        <p>Conference: {conference.name}</p>
        <p>Start date: {conference.displayStartDate}</p>
        <p>End date: {conference.displayEndDate}</p>
        <p>City: {conference.city}</p>
        <p>Website: {conference.website}</p>
      </div>
		);
  }
}

export default ConferenceDetail;