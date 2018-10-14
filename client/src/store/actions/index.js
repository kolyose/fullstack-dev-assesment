import { campaigns as actionTypes } from './types';

export const getCampaigns = () => ({
  type: actionTypes.GET_CAMPAIGNS
});

export const getCampaignById = id => ({
  type: actionTypes.GET_CAMPAIGN_BY_ID,
  payload: { id }
});

export const setCampaigns = campaigns => ({
  type: actionTypes.GET_CAMPAIGNS,
  payload: {
    campaigns
  }
});

export const addCampaign = campaign => ({
  type: actionTypes.ADD_CAMPAIGN,
  payload: {
    campaign
  }
});