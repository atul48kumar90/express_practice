const express = require('express')

const { registerUser, login, getMe } = require('../controller/userController')
const {protect} = require('../middleware/authMiddleware')

const router = express.Router();

router.post('/', registerUser)
router.post('/login', login)
router.get('/me',protect, getMe)

module.exports = router;