'use strict'

const VillageModel = use('App/Models/Village')

class VillageController {
  async index({ Request, response, view }) {
    const villages = await VillageModel.all()
    const data = {
      'title': 'Informasi Desa'
    }

    return view.render('village.index', { villages: villages.rows, data: data })
  }
}

module.exports = VillageController
