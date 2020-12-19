const express = require('express')
const router = express.Router()

const Users = require('../models/User')

router.use('/', async (req, res) => {
    res.json(await Users.find());
})

module.exports = router;
