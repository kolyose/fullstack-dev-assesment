import mongoose from 'mongoose';
import Models from './models';

const { Campaign } = Models;

const connect = async dbPath => {
  mongoose.connect(dbPath, { 
    autoReconnect: true,
    useCreateIndex: true, 
    useNewUrlParser: true, 
  });
  mongoose.connection.on('error', err => {
    throw err;
  });
};

const disconnect = () => mongoose.connection.close();
const reset = async () => Campaign.deleteMany();
const getCampaigns = async () => Campaign.find();
const getCampaignById = async id => Campaign.findOne({ id });
const seedCampaigns = async (data) => Campaign.insertMany(data);

export default {
  connect,
  disconnect,
  reset,
  getCampaigns,
  getCampaignById,
  seedCampaigns,
};
