import express from 'express';

// Local imports
import { signup, signin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

export default router;
