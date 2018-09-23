import React from 'react';
import { shallow, mount } from 'enzyme';
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
		rendered = mount(<ConferenceDetail conference={data} />);
		const conferenceName = 'Code1';
		expect(rendered.find('h2').text()).toEqual(conferenceName);
	});

	it('renders conference start date', () => {
		rendered = mount(<ConferenceDetail conference={data} />);
		const startDate = 'Start date: 19 Jul 2018';
		expect(rendered.find('p').at(0).text()).toEqual(startDate);
	});

	it('renders conference end date', () => {
		rendered = mount(<ConferenceDetail conference={data} />);
		const endDate = 'End date: 10 Jul 2018';
		expect(rendered.find('p').at(1).text()).toEqual(endDate);
	});

	it('renders conference city', () => {
		rendered = mount(<ConferenceDetail conference={data} />);
		const city = 'City: Melbourne';
		expect(rendered.find('p').at(2).text()).toEqual(city);
	});

	it('renders conference website', () => {
		rendered = mount(<ConferenceDetail conference={data} />);
		const website = 'www.code1.com.au';
		expect(rendered.find('p').at(3).text()).toEqual(website);
	});
});
