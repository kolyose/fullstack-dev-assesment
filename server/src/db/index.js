import mongoose from 'mongoose';
import Models from './models';

const { Campaign } = Models;

const connect = async dbPath => {
  mongoose.connect(dbPath);
  mongoose.connection.on('error', err => {
    throw err;
  });
};

const disconnect = () => mongoose.connection.close();

const getCampaigns = async () => Campaign.find();
const seedCampaigns = async (data) => Campaign.insertMany(data);

export default {
  connect,
  disconnect,
  getCampaigns,
  seedCampaigns,
};
