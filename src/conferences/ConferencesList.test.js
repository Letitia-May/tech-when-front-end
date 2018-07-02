import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ConferencesList from './ConferencesList';
import ConferenceDetail from './ConferenceDetail';

describe('ConferencesList', () => {
	it('renders one ConferenceDetail component when there is a conference', () => {
		const data = [{"name": "Code1"}];
		const rendered = mount(<ConferencesList conferences={data}/>);

		expect(rendered.find(ConferenceDetail).length).toEqual(1);
	});

	it('does not render ConferenceDetail component when there is no conference', () => {
		const data = [];
		const rendered = mount(<ConferencesList conferences={data}/>);

		expect(rendered.find(ConferenceDetail).length).toEqual(0);
	});
});
