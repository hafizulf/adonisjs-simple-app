'use strict'

const VillageController = require('../app/Controllers/Http/VillageController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/village', 'VillageController.index').as('village.index')
Route.get('/village/create', 'VillageController.form_save_village').as('village.create')
Route.post('/village/save', 'VillageController.save_village').as('village.save')
Route.get('/village/update/:id', 'VillageController.form_update_village').as('village.form_update')
Route.post('/village/update', 'VillageController.update_village').as('village.update')
