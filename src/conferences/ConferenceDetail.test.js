import React from 'react';
import { shallow } from 'enzyme';
import ConferenceDetail from './ConferenceDetail';

describe('ConferenceDetail', () => {	
	let data;
	let rendered;

	beforeEach(() => {
		data = {
			"name": "Code1",
			"displayStartDate": "19 Jul 2018",
			"displayEndDate": "10 Jul 2018",
			"city": "Melbourne",
			"website": "www.code1.com.au"
		};
	});

  it('renders without crashing', () => {
    shallow(<ConferenceDetail />);
  });

	it('renders conference name', () => {
		rendered = shallow(<ConferenceDetail conference={data} />);
		const conferenceName = 'Code1';
		expect(rendered.html().toString()).toContain(conferenceName);
	});

	it('renders conference start date', () => {
		rendered = shallow(<ConferenceDetail conference={data} />);
		const startDate = 'Start date: 19 Jul 2018';
		expect(rendered.html().toString()).toContain(startDate);
	});

	it('renders conference end date', () => {
		rendered = shallow(<ConferenceDetail conference={data} />);
		const endDate = 'End date: 10 Jul 2018';
		expect(rendered.html().toString()).toContain(endDate);
	});

	it('renders conference city', () => {
		rendered = shallow(<ConferenceDetail conference={data} />);
		const city = 'City: Melbourne';
		expect(rendered.html().toString()).toContain(city);
	});

	it('renders conference website', () => {
		rendered = shallow(<ConferenceDetail conference={data} />);
		const website = 'www.code1.com.au';
		expect(rendered.html().toString()).toContain(website);
	});
});
