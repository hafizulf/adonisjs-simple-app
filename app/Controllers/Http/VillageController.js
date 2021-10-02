'use strict'

const VillageModel = use('App/Models/Village')

class VillageController {

  async index({ view }) {
    const title = 'Informasi Desa'
    const villages = await VillageModel.all()

    return view.render('village.index', { title: title, villages: villages.rows })
  }

  async form_save_village({ view }) {
    const title = 'Form tambah - Informasi Desa'
    return view.render('village.create', { title: title  })
  }

  async save_village({ request, response, session }) {
    const model = new VillageModel()
    model.name = request.input('name')

    await model.save()

    session.flash({ notification: 'Village\'s has been saved' })
    return response.route('village.index')
  }

  async form_update_village({ response, view, params }) {
    const { id } = params
    const village = await VillageModel.find(id)

    if (!village) {
      return response.route('village.index')
    }

    const title = 'Form ubah - Informasi Desa'
    return view.render('village.update', { title: title, village: village })
  }

  async update_village({ request, response, session }) {
    const village_id = request.input('id')
    const village = await VillageModel.find(village_id)

    village.name = request.input('name')

    await village.save()

    session.flash({ notification: 'Village\'s has been updated' })
    return response.route('village.index')
  }

  async delete_village({ response, params, session }) {
    const { id } = params
    const village = await VillageModel.find(id)

    await village.delete()

    session.flash({ notification: 'Village\'s has been deleted' })
    return response.route('village.index')
  }
}

module.exports = VillageController
