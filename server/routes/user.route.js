import express from 'express';

// Local imports
import { test } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', test);

export default router;
