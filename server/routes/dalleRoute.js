import express from 'express'

import { createPost } from '../controllers/dalleController.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('This is DALL-E')
})

router.post('/', createPost)

export default router