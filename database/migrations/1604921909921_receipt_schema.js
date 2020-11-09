'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReceiptSchema extends Schema {
  up () {
    this.create('receipts', (table) => {
      table.increments()
      table.string('nama_resep')
      table.integer('ID_plan')
      table.timestamps()
    })
  }

  down () {
    this.drop('receipts')
  }
}

module.exports = ReceiptSchema
