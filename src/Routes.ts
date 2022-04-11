import { Router } from 'express';
import { CreateUserController }  from './controllers/CreateUserController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { FollowController } from './controllers/FollowController';
import { Auth } from './middlewares/Auth';
import { Page } from './middlewares/Page';
import { ListStreamersController } from './controllers/ListStreamersController';

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const followController = new FollowController();
const listStreamersController = new ListStreamersController();
router.post('/signup', createUserController.handle);
router.post('/login', authenticateUserController.handle);

router.get('/streamers', Page , Auth  , listStreamersController.handle);

router.post('/follow=:id', Auth, followController.handle);

export { router };