import config from './config';
import db from './db';

(async function main() {
  try {
    await db.connect(config.DB_PATH);
    const campaigns = await db.getCampaigns();
    campaigns.forEach(campaign => console.log(campaign.platforms.get('facebook')));
  } catch (e) {
    console.error(e);
    db.disconnect();
  }
})();
