const express = require('express')

const routes = express.Router()

const authMiddleare = require('./app/middlewares/auth')
const controllers = require('./app/controllers')
routes.get('/', authMiddleare, (req, res) => {
  return res.json({ ok: true })
})
routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

module.exports = routes
