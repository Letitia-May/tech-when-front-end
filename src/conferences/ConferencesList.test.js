import React from 'react';
import { shallow, mount } from 'enzyme';
import ConferencesList from './ConferencesList';
import ConferenceDetail from './ConferenceDetail';

describe('ConferencesList', () => {
	it('renders without crashing', () => {
    shallow(<ConferencesList />);
	});

	it('renders a ConferenceDetail component for each conference', () => {
		const data = [{"name": "Code1"}, {"name": "Code2"}, {"name": "Code3"}];
		const rendered = mount(<ConferencesList conferences={data}/>);

		expect(rendered.find(ConferenceDetail).length).toEqual(3);
	});

	it('does not render ConferenceDetail component when there is no conference', () => {
		const data = [];
		const rendered = mount(<ConferencesList conferences={data}/>);

		expect(rendered.find(ConferenceDetail).length).toEqual(0);
	});
});
