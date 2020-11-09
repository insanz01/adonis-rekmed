'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubjectiveSchema extends Schema {
  up () {
    this.create('subjectives', (table) => {
      table.increments()
      table.string('nama')
      table.integer('ID_pasien')
      table.timestamps()
    })
  }

  down () {
    this.drop('subjectives')
  }
}

module.exports = SubjectiveSchema
