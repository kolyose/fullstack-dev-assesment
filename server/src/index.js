import fs from 'fs';
import util from 'util'
import config from './config';
import db from './db';

const readFile = util.promisify(fs.readFile);

(async function main() {
  try {
    await db.connect(config.DB_PATH);   

    const seedFile = await readFile('/../data/data.json');
    const campaignsToSeed = JSON.parse(seedFile);
    await db.seedCampaigns(campaignsToSeed);
    
    const campaigns = await db.getCampaigns();
  } catch (e) {
    console.error(e);
    db.disconnect();
  }
})();
