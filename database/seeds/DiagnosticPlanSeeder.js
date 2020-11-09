'use strict'

/*
|--------------------------------------------------------------------------
| DiagnosticPlanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class DiagnosticPlanSeeder {
  async run () {
		const diagnosticPlan = await Factory.model('App/Models/DiagnosticPlan').createMany(20)
  }
}

module.exports = DiagnosticPlanSeeder
