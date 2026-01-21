import express from 'express';

// Local imports
import { signup, signin, signOut } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signOut);

export default router;
