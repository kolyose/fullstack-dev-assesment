import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import data from '../../../../../server/data/data.json'
import CampaignsList from './list.js';

describe('<CampaignsList/>', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<CampaignsList campaigns={ data }/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});