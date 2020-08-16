import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessinosController = new SessionsController();

sessionsRouter.post('/', sessinosController.create);

export default sessionsRouter;
