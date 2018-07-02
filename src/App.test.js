import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
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
      const rendered = shallow(<App />);
      const header = 'TechWhen';
		  expect(rendered.find('h1').text()).toEqual(header);
    });

    it('renders "Conferences" page title', () => {
      const rendered = shallow(<App />);
      const pageTitle = 'Conferences';
		  expect(rendered.find('.page-title').text()).toEqual(pageTitle);
    });
  });
})
