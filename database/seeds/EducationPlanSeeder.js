'use strict'

/*
|--------------------------------------------------------------------------
| EducationPlanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class EducationPlanSeeder {
  async run () {
		const educationPlan = await Factory.model('App/Models/EducationPlan').createMany(20)
  }
}

module.exports = EducationPlanSeeder
