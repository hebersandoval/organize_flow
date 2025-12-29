import express from 'express';

// Local imports
import { test, getUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', test);
router.get('/:id', getUser);

export default router;
