const express = require('express')
const router = express.Router()

const { create } = require('../controllers/post')

router.post('/post', create )

module.exports = router