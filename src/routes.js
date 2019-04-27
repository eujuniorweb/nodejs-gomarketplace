const express = require('express')

const routes = express.Router()

const UserController = require('./app/controller/UserController')

routes.get('/', (req, res) => {
  return res.json('Hello World')
})
routes.post('/users', UserController.store)

module.exports = routes
