'use strict'

/*
|--------------------------------------------------------------------------
| ReceiptSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ReceiptSeeder {
  async run () {
		const receipts = await Factory.model('App/Models/Receipt').createMany(20)
  }
}

module.exports = ReceiptSeeder
