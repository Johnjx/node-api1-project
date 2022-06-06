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

server.get(`${URL}/:id`, (req, res) => {
    const { id } = req.params
    Users.findById(id).then(result => {
        if (result == null) {
            res.status(404).json({ message: "The user with the specified ID does not exist" })
            return
        }
        res.json(result)
    })
    .catch(err => {
        res.status(500).json({ message: "The user information could not be retrieved" })
    })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
