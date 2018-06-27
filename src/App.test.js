import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import ConferencesList from './conferences/ConferencesList';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders ConferencesList component', () => {
		shallow(<ConferencesList/>);
  });

  describe('view', () => {
    it('renders "TechWhen" header', () => {
      const wrapper = shallow(<App />);
      const header = <h1>TechWhen</h1>;
      expect(wrapper.contains(header)).toEqual(true);
    });

    it('renders "Conferences" page title', () => {
      const wrapper = shallow(<App />);
      const pageTitle = <h2 className="page-title">Conferences</h2>;
      expect(wrapper.contains(pageTitle)).toEqual(true);
    });
  });
})
