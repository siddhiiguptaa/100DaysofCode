const express = require('express')
const router = express.Router()

const { create, list } = require('../controllers/post')
// const { list } = require('../controllers/post')


router.post('/post', create )

router.get('/posts', list)

module.exports = router