const express = require('express')

const routes = express.Router()

const UserController = require('./app/controller/UserController')
const SessionController = require('./app/controller/SessionController')

routes.get('/', (req, res) => {
  return res.json('Hello World')
})
routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

module.exports = routes
