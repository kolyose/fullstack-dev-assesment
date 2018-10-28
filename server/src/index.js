import fs from 'fs';
import util from 'util'
import config from './config';
import db from './db';
import app from './app';

const readFile = util.promisify(fs.readFile);

let server;
const shutdown = () => {
  if (db) 
    db.disconnect();

  if (server) 
    server.close();
}

(async function main() {
  try {
    await db.connect(config.DB_PATH);   

    // pre-populate DB with mocked data
    await db.reset(); 
    const seedFile = await readFile('/../data/data.json');
    const campaignsToSeed = JSON.parse(seedFile);
    await db.seedCampaigns(campaignsToSeed);

    server = app.listen(config.PORT);
   
  } catch (e) {    
    shutdown();
    console.error(e);
  }
})();
