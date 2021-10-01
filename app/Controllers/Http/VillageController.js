'use strict'

const VillageModel = use('App/Models/Village')

class VillageController {
  constructor() {
    const data = {
      'title': 'Informasi Desa'
    }

    this.data = data
  }

  async index({ Request, response, view }) {
    const villages = await VillageModel.all()

    return view.render('village.index', { villages: villages.rows, data:  this.data  })
  }

  async save_village({ request, response, view }) {
    const model = new VillageModel()

    model.name = request.input('name')

    await model.save()

    return response.status(201).json(model)
  }
}

module.exports = VillageController
