const jwt = require('jsonwebtoken')
const auth = require('../../config/auth')
const { promisify } = require('util')
module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'token not povided' })
  }

  const [, token] = authHeader.split(' ')
  try {
    const decoded = await promisify(jwt.verify)(token, auth.secret)
    req.userId = decoded.id
    return next()
  } catch (error) {
    return res.status(401).json({ error: 'token invalid' })
  }
}
