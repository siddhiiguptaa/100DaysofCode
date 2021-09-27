const express = require('express')
const router = express.Router()

const { create, list, read } = require('../controllers/post')
// const { list } = require('../controllers/post')


router.post('/post', create )

router.get('/posts', list)

router.get('/post/:slug', read)

module.exports = router