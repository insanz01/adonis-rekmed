'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiagnosticPlanSchema extends Schema {
  up () {
    this.create('diagnostic_plans', (table) => {
      table.increments()
      table.string('nama_diagnosis')
      table.integer('ID_plan')
      table.timestamps()
    })
  }

  down () {
    this.drop('diagnostic_plans')
  }
}

module.exports = DiagnosticPlanSchema
