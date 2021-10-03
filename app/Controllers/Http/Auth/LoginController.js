'use strict'

class LoginController {
  async index({ view }) {
    return view.render('auth.login', { title: 'Login Page' })
  }

  async login({ request, response, session, auth }) {

    const { email, password } = request.all()

    try {
      await auth.attempt(email, password)

      return response.route('village.index')
    } catch {
      session.flash({ alert: 'Invalid credential' })
      return response.redirect('back')
    }
  }

  async logout({ response, auth }) {
    await auth.logout()

    return response.route('login.index')
  }
}

module.exports = LoginController
