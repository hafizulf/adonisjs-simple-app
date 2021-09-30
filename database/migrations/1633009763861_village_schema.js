'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VillageSchema extends Schema {
  up () {
    this.create('villages', (table) => {
      table.increments()
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('villages')
  }
}

module.exports = VillageSchema
