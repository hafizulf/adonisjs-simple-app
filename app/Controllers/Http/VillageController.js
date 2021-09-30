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
}

module.exports = VillageController
