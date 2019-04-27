const express = require('express')

const routes = express.Router()

const UserController = require('./app/controller/UserController')
const SessionController = require('./app/controller/SessionController')
const authMiddleare = require('./app/middlewares/auth')

routes.get('/', authMiddleare, (req, res) => {
  return res.json({ ok: true })
})
routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

module.exports = routes
