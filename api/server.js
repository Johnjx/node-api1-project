// BUILD YOUR SERVER HERE
const express = require('express')
const Users = require('./users/model')

const server = express();
server.use(express.json())

const URL = "/api/users"

server.get('/', (req, res) => {
    console.log('req received')
    res.json({ message: 'your request has been received properly'})
})

server.get(URL, (req, res) => {
    Users.find().then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json({ message: "The users information could not be retrieved" })
    })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
