import express from 'express';
import { getThumbnailbyTd, getUserThumbnails } from '../controllers/UserControllers.js';
import protect from '../middlewares/auth.js';

const UserRouter = express.Router()

UserRouter.get('/thumbnails', protect, getUserThumbnails)
UserRouter.get('/thumbnail/:id', protect, getThumbnailbyTd)

export default UserRouter;