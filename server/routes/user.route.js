import express from 'express';

// Local imports
import { test, getUser, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', test);
router.get('/:id', getUser);
router.patch('/update/:id', updateUser);

export default router;
