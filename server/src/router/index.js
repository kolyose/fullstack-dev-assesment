import Router from 'koa-router';
import rootController from '../controllers/root';
import campaignsController from '../controllers/campaigns';

const router = new Router();

router.head('/', rootController.head);
router.get('/', rootController.get);
router.get('/campaigns', campaignsController.getAll);
router.get('/campaigns/:id', campaignsController.getOne);

export default router;