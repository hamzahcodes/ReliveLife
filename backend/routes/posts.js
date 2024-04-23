import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
import { upload } from '../middleware/multer.js';
const router = express.Router();

//getPosts is a callback when we go to route '/'
router.get('/', getPosts);
router.post('/', upload.single('image'), createPost);
// router.post('/uploadImage', upload.single('image'), uploadImage);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost)

export default router;
