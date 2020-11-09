'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EducationPlanSchema extends Schema {
  up () {
    this.create('education_plans', (table) => {
      table.increments()
      table.string('nama_edukasi')
      table.integer('ID_plan')
      table.timestamps()
    })
  }

  down () {
    this.drop('education_plans')
  }
}

module.exports = EducationPlanSchema
