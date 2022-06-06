// BUILD YOUR SERVER HERE
const express = require('express')
const Users = require('./users/model')

const server = express();
server.use(express.json())

server.get('/', (req, res) => {
    console.log('req received')
    res.json({ message: 'your request has been received properly'})
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
