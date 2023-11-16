const express = require('express')
const router = express.Router()
const users = require('../controllers/users')

router.post('/signup',users.addUser)
router.post('/login',users.getUser)

module.exports = router