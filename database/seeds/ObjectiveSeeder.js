'use strict'

/*
|--------------------------------------------------------------------------
| ObjectiveSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ObjectiveSeeder {
  async run () {
		const objective = await Factory.model('App/Models/Objective').createMany(20)
  }
}

module.exports = ObjectiveSeeder
