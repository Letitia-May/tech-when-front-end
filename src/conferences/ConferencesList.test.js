import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ConferencesList from './ConferencesList';
import ConferenceDetail from './ConferenceDetail';

describe('ConferencesList', () => {
	it('renders one ConferenceDetail component when there is a conference', () => {
		const props = {"name": "Code1"}
		const rendered = mount(<ConferencesList conferences={props}/>);
		
		expect(rendered.find(ConferenceDetail).length).toEqual(1);
	});

	it('does not render ConferenceDetail component when there is no conference', () => {
		const props = {};
		const rendered = mount(<ConferencesList conferences={props}/>);

		expect(rendered.find(ConferenceDetail).length).toEqual(0);
	});
});
