import { campaigns as actionTypes } from './types';

export const getCampaigns = () => ({
  type: actionTypes.GET_CAMPAIGNS
});

export const getCampaignById = id => ({
  type: actionTypes.GET_CAMPAIGN_BY_ID,
  payload: { id }
});