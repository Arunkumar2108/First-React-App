import express from 'express';

import { getUsers , createUsers, getUser, delUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/users', getUsers);

router.post('/user', createUsers);

router.get('/users/:id', getUser);

router.delete('/users/:id', delUser);

router.put('/users/:id', updateUser);

export default router;