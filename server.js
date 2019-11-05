const express = require('express')
const helmet = require('helmet')

const server = express()

const carRouter = require('./cars/CAR_router')

server.use(express.json(), helmet())

server.use('/api/cars', carRouter)

server.get('/', (req, res) => {
    res.status(200).json({  api:  'Server running!'})
})

module.exports = server