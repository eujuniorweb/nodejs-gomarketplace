const User = require('../model/User')

class UserController {
  async store (req, res) {
    const { email } = req.body
    if (await User.findOne({ email })) {
      return res.status('400').json({ error: 'User alred exists!' })
    }
    const user = await User.create(req.body)
    return res.json(user)
  }
}
module.exports = new UserController()
