const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
var cors = require('cors')
const path = require('path')
const userRouter = require('./routes/user')
const router = require('./routes/user')

mongoose.connect('mongodb://127.0.0.1:27017/mevn', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => { console.log("[OK] DB is connected") })
const app = express()

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//  Routers
app.use('/api/user', userRouter)

app.use(router)

app.listen(3000, () => { console.log(`[OK] Server is running on http://localhost:3000`) })

app.use(morgan('dev'))
app.disable('etag');
