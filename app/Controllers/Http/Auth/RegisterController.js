'use strict'

class RegisterController {
  async index({ view }) {
    const title = 'Registration page'
    return view.render('auth.register', { title: title })
  }
}

module.exports = RegisterController
