import fs from 'fs';
import util from 'util'
import config from './config';
import db from './db';
import app from './app';

const readFile = util.promisify(fs.readFile);

(async function main() {
  try {
    await db.connect(config.DB_PATH);   

    const seedFile = await readFile('/../data/data.json');
    const campaignsToSeed = JSON.parse(seedFile);
    await db.seedCampaigns(campaignsToSeed);

    app.listen(config.PORT);
   
  } catch (e) {    
    db.disconnect();
    throw e;
  }
})();
