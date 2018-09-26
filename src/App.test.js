import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import ConferencesList from './conferences/ConferencesList';
import * as conferencesRepository from './conferencesRepository';

import sinon from 'sinon';

describe('App', () => {

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    const stubbedConferences = Promise.resolve({
      json: () => {
        return [
          {
            name: "Code1",
            displayStartDate: "19 Jul 2018",
            displayEndDate: "10 Jul 2018",
            city: "Melbourne",
            website: "www.code1.com.au"
          },
          {
            name: "Code2",
            displayStartDate: "1 Nov 2018",
            displayEndDate: "5 Nov 2018",
            city: "Melbourne",
            website: "www.code2.com.au"
          }
        ];
      }
    })

    sandbox.stub(conferencesRepository, "findAll").returns(stubbedConferences);
  });

  afterEach(() => {
    sandbox.restore();
  });

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
