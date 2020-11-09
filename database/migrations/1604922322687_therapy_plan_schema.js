'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TherapyPlanSchema extends Schema {
  up () {
    this.create('therapy_plans', (table) => {
      table.increments()
      table.string('nama_terapi')
      table.integer('harga')
      table.integer('ID_plan')
      table.timestamps()
    })
  }

  down () {
    this.drop('therapy_plans')
  }
}

module.exports = TherapyPlanSchema
