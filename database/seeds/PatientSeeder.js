'use strict'

/*
|--------------------------------------------------------------------------
| PatientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class PatientSeeder {
  async run () {
  	const patients = await Factory.model('App/Models/Patient').createMany(20)
  }
}

module.exports = PatientSeeder
