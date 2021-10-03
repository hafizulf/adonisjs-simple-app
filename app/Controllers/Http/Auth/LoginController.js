'use strict'

class LoginController {
  async index({ view }) {
    return view.render('auth.login', { title: 'Login Page' })
  }

  async login({ request, response, session, auth }) {

    const { email, password } = request.all()

    await auth.attempt(email, password)

    session.flash({ notification: 'Login berhasil' })
    return response.route('village.index')
  }

  async logout({ response, auth }) {
    await auth.logout()

    return response.route('login.index')
  }
}

module.exports = LoginController
