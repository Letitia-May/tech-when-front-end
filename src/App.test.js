import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import ConferencesList from './conferences/ConferencesList';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders ConferencesList component when conference data', () => {
    const data = [{"name": "Code1"}];
		shallow(<ConferencesList conferences={data}/>);
  });

  it('renders ConferencesList component when no conference data', () => {
    const data = [];
		shallow(<ConferencesList conferences={data}/>);
  });

  describe('view', () => {
    it('renders "TechWhen" header', () => {
      const rendered = mount(<App />);
      const header = 'TechWhen';
		  expect(rendered.find('h2').text()).toEqual(header);
    });

    it('renders "Conferences" page title', () => {
      const rendered = mount(<App />);
      const pageTitle = 'Conferences';
		  expect(rendered.find('h1').text()).toEqual(pageTitle);
    });
  });
});
