'use strict'

const UserModel = use('App/Models/User')
const { validate } = use('Validator')

class RegisterController {
  async index({ view }) {
    const title = 'Registration page'
    return view.render('auth.register', { title: title })
  }

async store({ request, response, session }) {
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
      'password.min': 'Kata sandi terlalu pendek'
    }

    const validation = await validate(request.all(), rules, messages)

    if (validation.fails()) {
      session
      .withErrors(validation.messages())
      .flashExcept(['password'])

      return response.redirect('back')
    }

    const model = await UserModel.create({
      username: request.input('username'),
      email: request.input('email'),
      password: request.input('password'),
    })

    session.flash({ notification: 'User has been created, please login' })
    return response.redirect('back')
  }
}

module.exports = RegisterController
