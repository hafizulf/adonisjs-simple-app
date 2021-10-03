'use strict'

class LoginController {
  async index({ view }) {
    return view.render('auth.login', { title: 'Login Page' })
  }
}

module.exports = LoginController
