'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssessmentSchema extends Schema {
  up () {
    this.create('assessments', (table) => {
      table.increments()
      table.string('nama_diagnosis')
      table.integer('ID_pasien')
      table.timestamps()
    })
  }

  down () {
    this.drop('assessments')
  }
}

module.exports = AssessmentSchema
