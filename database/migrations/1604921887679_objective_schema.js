'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ObjectiveSchema extends Schema {
  up () {
    this.create('objectives', (table) => {
      table.increments()
      table.integer('nadi')
      table.integer('tekanan_darah')
      table.decimal('suhu_tubuh')
      table.integer('respiration_rate')
      table.decimal('berat_badan')
      table.integer('tinggi_badan')
      table.text('hasil_pemeriksaan')
      table.integer('ID_pasien')
      table.timestamps()
    })
  }

  down () {
    this.drop('objectives')
  }
}

module.exports = ObjectiveSchema
