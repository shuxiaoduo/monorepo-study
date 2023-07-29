import express from 'express';
import Controller from './controllers/todolist';

const router = express.Router();

router.post('/api/todolist', Controller.add);
router.get('/api/todolist', Controller.list);

export default router;
