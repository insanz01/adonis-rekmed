'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.increments()
      table.string('NIK', 16).notNullable().unique()
      table.string('nama', 255).notNullable()
      table.string('jenis_kelamin', 20).notNullable()
      table.date('tanggal_lahir')
      table.string('no_telp', 20)
      table.text('alamat')
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
