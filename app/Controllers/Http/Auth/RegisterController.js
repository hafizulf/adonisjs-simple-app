'use strict'

const UserModel = use('App/Models/User')
const { validate } = use('Validator')

class RegisterController {
  async index({ view }) {
    return view.render('auth.register', { title: 'Registration Page' })
  }

  async validate_user({ request, response, session }) {
    const rules = {
      username: 'required|unique:users, username',
      email: 'required|email|unique:users, email',
      password: 'required|min:4'
    }

    const messages = {
      required: (field) => `${field} wajib diisi`,
      'username.unique': 'Username sudah terdaftar',
      'email.unique': 'Email sudah terdaftar',
      'email.email': 'Masukkan email yang valid',
      'password.min': 'Password terlalu pendek'
    }

    const validation = await validate(request.all(), rules, messages)

    if (validation.fails()) {
      session
      .withErrors(validation.messages())
      .flashExcept(['password'])

      return response.redirect('back')
    }

    this.store({ request })

    session.flash({ notification: 'User has been created, please login' })
    return response.route('login.index')
  }

  async store({ request }) {
    await UserModel.create({
      username: request.input('username'),
      email: request.input('email'),
      password: request.input('password'),
    })
  }
}

module.exports = RegisterController
