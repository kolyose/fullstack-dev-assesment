import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import data from '../../../../../server/data/data.json'
import { CampaignDetails } from './CampaignDetails.js';
import Spinner from './../../spinner';

jest.mock('./../../../store/actions')

describe('<CampaignsDetails/>', () => {

  const campaignId = 100000001;  
  let wrapper;
  let getCampaignById;

  beforeEach(() => {
    getCampaignById = jest.fn();
  })

  describe('render()', () => {
    test('renders the component', () => {
      wrapper = shallow(<CampaignDetails
        campaign={ data[0] }
        classes={{}}
        match={{ params: { id: campaignId }}}
        getCampaignById={ getCampaignById }/>);

      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test("renders no <Spinner/> if 'campaign' prop is defined", () => {
      wrapper = shallow(<CampaignDetails        
        campaign={ data[0] }
        classes={{}}
        match={{ params: { id: campaignId }}}
        getCampaignById={ getCampaignById }/>);

        expect(wrapper.find(Spinner)).toHaveLength(0);
    });

    test("renders <Spinner/> if 'campaign' prop is undefined", () => {
      wrapper = shallow(<CampaignDetails        
        campaign={ undefined }
        classes={{ root: {} }}
        match={{ params: { id: campaignId }}}
        getCampaignById={ getCampaignById }/>);

        expect(wrapper.find(Spinner)).toHaveLength(1);
    });
  });

  describe('callbacks', () => {
    test("invokes 'getCampaignById()' with the campaign's id as an argument if 'campaign' prop is undefined", async () => {
      wrapper = shallow(<CampaignDetails       
        campaign={ undefined }
        classes={{}}
        match={{ params: { id: campaignId }}} 
        getCampaignById={ getCampaignById }/>);

        expect(getCampaignById).toBeCalledWith(campaignId);       
    });   
    
    test("does not invoke 'getCampaignById()' if 'campaign' prop is defined", () => {
      wrapper = shallow(<CampaignDetails
        campaign={ data[0] }
        classes={{}}
        match={{ params: { id: campaignId }}}
        getCampaignById={ getCampaignById }/>);

      expect(getCampaignById).not.toBeCalled();
    });    
  });
});