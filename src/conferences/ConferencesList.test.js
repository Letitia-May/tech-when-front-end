import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ConferencesList from './ConferencesList';
import ConferenceDetail from './ConferenceDetail';

describe('ConferencesList', () => {
	it('renders one ConferenceDetail component when there is a conference', () => {
		const data = {"name": "Code1"}
		shallow(<ConferenceDetail conference={data}/>);
	});
});
