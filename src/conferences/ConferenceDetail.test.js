import React from 'react';
import ReactDOM from 'react-dom';
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
		rendered = shallow(<ConferenceDetail conference={data} />);
	});

	it('renders conference name', () => {
		const conferenceName = 'Conference: Code1';
		expect(rendered.find('.name').text()).toEqual(conferenceName);
	});

	it('renders conference start date', () => {
		const startDate = 'Start date: 19 Jul 2018';
		expect(rendered.find('.startDate').text()).toEqual(startDate);
	});

	it('renders conference end date', () => {
		const endDate = 'End date: 10 Jul 2018';
		expect(rendered.find('.endDate').text()).toEqual(endDate);
	});

	it('renders conference city', () => {
		const city = 'City: Melbourne';
		expect(rendered.find('.city').text()).toEqual(city);
	});

	it('renders conference website', () => {
		const website = 'Website: www.code1.com.au';
		expect(rendered.find('.website').text()).toEqual(website);
	});
});
