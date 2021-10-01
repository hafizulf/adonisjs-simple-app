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

  async save_village({ request, response, view }) {
    const model = this.model
    model.name = request.input('name')

    await model.save()

    return response.status(201).json(model)
  }
}

module.exports = VillageController
