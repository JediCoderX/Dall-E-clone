import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

import postRoutes from './routes/postRoute.js'
import dalleRoutes from './routes/dalleRoute.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/post', postRoutes)
app.use('/dalle', dalleRoutes)

app.get('/', async (req, res) => {
    res.send('Hello DALL-E')
})

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('MongoDB connected')
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
    })
    .catch((error) => console.log(error))