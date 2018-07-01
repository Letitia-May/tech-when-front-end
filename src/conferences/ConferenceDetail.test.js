import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ConferenceDetail from './ConferenceDetail';

describe('ConferenceDetail', () => {	
	it('renders conference details', () => {
		const data = {
					"name": "Code1",
					"displayStartDate": "19 Jul 2018",
					"displayEndDate": "10 Jul 2018",
					"city": "Melbourne",
					"website": "www.code1.com.au"
		};

		const wrapper = shallow(<ConferenceDetail conference={data} />);

		const conferenceName = <p>Conference: {data.name}</p>;
		const startDate = <p>Start date: {data.displayStartDate}</p>;
		const endDate = <p>End date: {data.displayEndDate}</p>;
		const city = <p>City: {data.city}</p>;
		const website = <p>Website: {data.website}</p>;

		expect(wrapper.contains(conferenceName)).toEqual(true);
		expect(wrapper.contains(startDate)).toEqual(true);
		expect(wrapper.contains(endDate)).toEqual(true);
		expect(wrapper.contains(city)).toEqual(true);
		expect(wrapper.contains(website)).toEqual(true);
	});
});
