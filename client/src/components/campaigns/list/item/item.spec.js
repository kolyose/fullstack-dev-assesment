import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StaticRouter } from 'react-router-dom';

import data from '../../../../../../server/data/data.json'
import CampaignsListItem from './item.js';

describe('<CampaignsListItem/>', () => {
  let wrapper;

  afterEach(() => {
    wrapper = null;
  });

  describe('render()', () => {
    test('renders the component', () => {
      wrapper = shallow(<CampaignsListItem campaign={ data[0] } classes={ {} }/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    }); 
  });

  describe('routing', () => {
    test("contains a link to the given campaign's route", () => {
      wrapper = mount(
        <StaticRouter context={{}}>
          <CampaignsListItem  campaign={ data[0] } classes={ {} } />
        </StaticRouter>
      );
      expect(wrapper.find('Link').first().prop('to')).toEqual(`/campaigns/${data[0].id}`);
    });
  });
});