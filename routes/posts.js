import express from 'express';
import {getPosts, createPost, getPost, updatePost, deletePost, upvotePost} from '../controllers/posts.js'

const router = express.Router();

router.get('/', getPosts)
router.post('/', createPost)
router.get('/:id', getPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/upvote/:id', upvotePost)
router.patch('/downvote/:id', upvotePost)

export default router;