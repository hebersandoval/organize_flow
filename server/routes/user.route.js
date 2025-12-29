import express from 'express';

// Local imports
import { test, getUser, updateUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', test);
router.get('/:id', getUser);
router.patch('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;
