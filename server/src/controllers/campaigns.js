import db from '../db';

const getAll = async ctx => {  
  const campaigns = await db.getCampaigns(); 
  if (!campaigns.length) {
    ctx.status = 204;
  }
  ctx.body = campaigns;
};

const getOne = async ctx => {  
  const campaign = await db.getCampaignById(ctx.params.id);
  if (!campaign) {
    ctx.throw(404, 'Campaign not found.');
  }
  ctx.body = campaign;
};

export default {
  getAll,
  getOne
}