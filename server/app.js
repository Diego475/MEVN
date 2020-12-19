const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const userRouter = require('./routes/user')
mongoose.connect('mongodb://127.0.0.1:27017/mevn', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => { console.log("[OK] DB is connected") })
const app = express()



//  Routers
app.use('/api/user', userRouter)

app.listen(3000, () => { console.log(`[OK] Server is running on http://localhost:3000`) })

app.use(express.json())
app.use(morgan('dev'))
app.disable('etag');
