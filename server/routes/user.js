const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.use('/get', UserController.getUsers)
router.use('/create', UserController.createUser)


module.exports = router;
