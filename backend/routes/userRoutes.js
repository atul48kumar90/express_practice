const express = require('express')

const { registerUser, login, getMe } = require('../controller/userController')

const router = express.Router();

router.post('/', registerUser)
router.post('/login', login)
router.get('/me', getMe)

module.exports = router;