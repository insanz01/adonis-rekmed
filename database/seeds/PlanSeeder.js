'use strict'

/*
|--------------------------------------------------------------------------
| PlanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class PlanSeeder {
  async run () {
		const plan = await Factory.model('App/Models/Plan').createMany(20)
  }
}

module.exports = PlanSeeder
