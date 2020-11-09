'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

const Factory = use('Factory')

Factory.blueprint('App/Models/Patient', async (faker) => {
  return {
    NIK: faker.string({length: 16, alpha: false, numeric: true}),
    nama: faker.name(),
    jenis_kelamin: faker.gender(),
    tanggal_lahir: faker.birthday({string: true}),
    no_telp: faker.phone(),
    alamat: faker.address()
  }
})
