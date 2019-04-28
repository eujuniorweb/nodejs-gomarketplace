const nodemailer = require('nodemailer')
const mailConfig = require('../../config/mail')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const handlebars = require('express-handlebars')

const transport = nodemailer.createTransport(mailConfig)
const viewPath = path.resolve(__dirname, '..', 'views', 'emails')
transport.use(
  'compile',
  hbs({
    viewEngine: handlebars.create({
      partialsDir: path.resolve(viewPath, 'partials')
    }),
    viewPath,
    extName: '.hbs'
  })
)

module.exports = transport
