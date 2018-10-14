import actionTypes from './types';

export const getCampaigns = () => ({
  type: actionTypes.GET_CAMPAIGNS
});

export const setCampaigns = (campaigns) => ({
  type: actionTypes.GET_CAMPAIGNS,
  payload: {
    campaigns
  }
});