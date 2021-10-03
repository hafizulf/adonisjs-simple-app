'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.get('/village', 'VillageController.index').as('village.index')
  Route.get('/village/create', 'VillageController.form_save_village').as('village.create')
  Route.post('/village/save', 'VillageController.save_village').as('village.save')
  Route.get('/village/update/:id', 'VillageController.form_update_village').as('village.form_update')
  Route.post('/village/update', 'VillageController.update_village').as('village.update')
  Route.post('/village/delete', 'VillageController.delete_village')

  Route.get('/logout', 'Auth/LoginController.logout').as('login.logout')
}).middleware(['auth'])

Route.group(() => {
  Route.get('/register', 'Auth/RegisterController.index').as('register.index')
  Route.post('/register', 'Auth/RegisterController.store').as('register.store')
  Route.get('/login', 'Auth/LoginController.index').as('login.index')
  Route.post('/login', 'Auth/LoginController.login').as('login.login')
}).middleware(['guest'])
