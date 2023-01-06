import express from 'express';
import {getPosts, createPost, getPost, updatePost, deletePost, upvotePost, downvotePost, likePost} from '../controllers/posts.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getPosts)
router.post('/', auth, createPost)
router.get('/:id', auth,  getPost)
router.patch('/:id', auth,  updatePost)
router.patch('/like/:id', auth,  likePost)
router.delete('/:id', auth, deletePost)
router.patch('/upvote/:id',auth, upvotePost)
router.patch('/downvote/:id',auth, downvotePost)

export default router;