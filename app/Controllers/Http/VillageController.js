'use strict'

const VillageModel = use('App/Models/Village')

class VillageController {
  async index({ Request, response, view }) {
    const villages = await VillageModel.all()

    return response.json(villages.rows)
  }
}

module.exports = VillageController
