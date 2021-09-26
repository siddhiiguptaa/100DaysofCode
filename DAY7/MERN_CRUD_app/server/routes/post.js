const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.json({
        data:'You received nodejs api for react node crud app'
    })
})

module.exports = router