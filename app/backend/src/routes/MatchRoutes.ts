import { Router } from 'express';
import AuthMiddleware from '../middlewares/authMiddleware';
import MatchController from '../controllers/MatchController';

const router = Router();

router.get('/', AuthMiddleware.validateToken, MatchController.getMatches);

export default router;
