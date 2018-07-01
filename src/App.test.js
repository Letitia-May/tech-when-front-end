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
    const data = {"name": "Code1"};
		shallow(<ConferencesList conferences={data}/>);
  });

  it('renders ConferencesList component when no conference data', () => {
    const data = {};
		shallow(<ConferencesList conferences={data}/>);
  });

  describe('view', () => {
    it('renders "TechWhen" header', () => {
      const rendered = shallow(<App />);
      const header = <h1>TechWhen</h1>;
      expect(rendered.contains(header)).toEqual(true);
    });

    it('renders "Conferences" page title', () => {
      const rendered = shallow(<App />);
      const pageTitle = <h2 className="page-title">Conferences</h2>;
      expect(rendered.contains(pageTitle)).toEqual(true);
    });
  });
})
