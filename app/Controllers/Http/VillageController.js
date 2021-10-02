'use strict'

const VillageModel = use('App/Models/Village')

class VillageController {
  constructor() {
    const data = {
      'title': 'Informasi Desa'
    }

    const model = new VillageModel()

    this.data = data
    this.model = model
  }

  async index({ view }) {
    const villages = await VillageModel.all()

    return view.render('village.index', { villages: villages.rows, data:  this.data  })
  }

  async form_save_village({ view }) {
    const data = {'title': 'Form tambah - Informasi Desa'}
    return view.render('village.create', { data: data  })
  }

  async save_village({ request, response, session }) {
    const model = this.model
    model.name = request.input('name')

    await model.save()

    session.flash({ notification: 'Village\'s name has been saved' })
    return response.route('village.index')
  }

  async form_update_village({ request, response, view, params }) {
    const village_id = params.id
    const village = await VillageModel.find(village_id)
    return response.json(village)
  }
}

module.exports = VillageController
