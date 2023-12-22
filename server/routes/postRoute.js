import express from 'express'

import { getAllPosts, createAllPosts } from '../controllers/postController.js'

const router = express.Router()

router.get('/', getAllPosts)

router.post('/', createAllPosts)

export default router