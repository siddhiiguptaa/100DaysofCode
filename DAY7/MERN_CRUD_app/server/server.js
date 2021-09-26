const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

// application invoking express in app
const app = express()

//connect to database

mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true

})
        .then(() => console.log('DATABASE CONNECTED !'))

// middleware request and response 
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

// routes

app.get('*', (req, res) => {
    res.json({
        data:'You received nodejs api for react node crud app'
    })
})

// port variable
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`The server is running on port ${port}`))