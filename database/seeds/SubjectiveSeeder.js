'use strict'

/*
|--------------------------------------------------------------------------
| SubjectiveSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class SubjectiveSeeder {
  async run () {
		const subjectives = await Factory.model('App/Models/Subjective').createMany(20)
  }
}

module.exports = SubjectiveSeeder
