require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const homeRoutes = require('./routes/home')
const userRoutes = require('./routes/user')
const listRoutes = require('./routes/list')

mongoose.set('strictQuery', false);

// express app
const app = express()
        
// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use(homeRoutes)
app.use('/api/users', userRoutes)
app.use('/api/lists', listRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



process.env