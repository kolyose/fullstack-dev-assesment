import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import data from '../../../../server/data/data.json'
import { Campaigns } from './Campaigns.js';
import CampaignsList from './list';
import Spinner from './../spinner';

jest.mock('./../../store/actions')

describe('<Campaigns/>', () => {
  let wrapper;
  let getCampaigns;

  beforeEach(() => {
    getCampaigns = jest.fn();
  })

  describe('render()', () => {
    test('renders the component', () => {
      wrapper = shallow(<Campaigns
        campaigns={ data }
        isLoading= { false }
        getCampaigns={ getCampaigns }/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test("renders <CampaignsList/> if 'isLoading' prop equals to 'false'", () => {
      wrapper = shallow(<Campaigns        
        campaigns={ data }
        isLoading= { false }
        getCampaigns={ getCampaigns }/>);

        expect(wrapper.find(CampaignsList)).toHaveLength(1);
        expect(wrapper.find(Spinner)).toHaveLength(0);
    });

    test("renders <Spinner/> if 'isLoading' prop equals to 'true'", () => {
      wrapper = shallow(<Campaigns        
        campaigns={ data }
        isLoading= { true }
        getCampaigns={ getCampaigns }/>);

        expect(wrapper.find(Spinner)).toHaveLength(1);
        expect(wrapper.find(CampaignsList)).toHaveLength(0);
    });
  });

  describe("callbacks", () => {
    test("invokes 'getCampaigns()' if 'campaigns' prop is undefined", async () => {
      wrapper = shallow(<Campaigns       
        campaigns={ undefined }
        isLoading= { true }
        getCampaigns={ getCampaigns }/>);

        expect(getCampaigns).toBeCalled();       
    });    

    test("does not invoke 'getCampaigns()' if 'campaigns' prop is defined", () => {
      wrapper = shallow(<Campaigns       
        campaigns={ data }
        isLoading= { false }
        getCampaigns={ getCampaigns }/>);

        expect(getCampaigns).not.toBeCalled();       
    });    
  });
});