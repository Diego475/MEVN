const express = require('express')
const router = express.Router()

const Users = require('../models/User')

router.use('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    await res.status(200).json(await Users.find({}))
})
module.exports = router;
