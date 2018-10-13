import Router from 'koa-router';
import db from '../db';

const router = new Router();

router.head('/', ctx => {
  ctx.status = 200;
});

router.get('/campaigns', async ctx => {  
  ctx.body = await db.getCampaigns(); 
})

export default router;