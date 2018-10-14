import axios from 'axios';
import config from './../config';

const instance = axios.create({
  baseURL: config.BASE_URL
});

const getCampaigns = async () => {
  const response = await instance.get('/campaigns');
  return response.data;
};

const getCampaignById = async (id) => {
  const response = await instance.get(`/campaigns/${id}`);
  return response.data;
};

export default {
  getCampaigns,
  getCampaignById
}