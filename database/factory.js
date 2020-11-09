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

Factory.blueprint('App/Models/Assessment', async (faker) => {
  return {
    nama_diagnosis: faker.animal(),
    ID_pasien: faker.integer({min: 1, max: 22})
  }
})

Factory.blueprint('App/Models/DiagnosticPlan', async (faker) => {
  return {
    nama_diagnosis: faker.sentence(),
    ID_plan: faker.integer({min: 1, max: 20})
  }
})

Factory.blueprint('App/Models/EducationPlan', async (faker) => {
  return {
    nama_edukasi: faker.sentence(),
    ID_plan: faker.integer({min: 1, max: 20})
  }
})

Factory.blueprint('App/Models/Objective', async (faker) => {
  return {
    nadi: faker.integer({min: 60, max: 120}),
    tekanan_darah: faker.integer({min: 90, max: 140}),
    suhu_tubuh: faker.floating(),
    respiration_rate: faker.integer(),
    berat_badan: faker.integer({min: 10, max: 110}),
    tinggi_badan: faker.integer({min: 140, max: 180}),
    hasil_pemeriksaan: faker.paragraph(),
    ID_pasien: faker.integer({min: 1, max: 22})
  }
})

Factory.blueprint('App/Models/Plan', async (faker) => {
  return {
    ID_pasien: faker.integer({min: 1, max: 22})
  }
})

Factory.blueprint('App/Models/Receipt', async (faker) => {
  return {
    nama_resep: faker.animal(),
    ID_plan: faker.integer({min: 1, max: 20})
  }
})

Factory.blueprint('App/Models/Subjective', async (faker) => {
  return {
    nama: faker.sentence(),
    ID_pasien: faker.integer({min: 1, max: 22})
  }
})

Factory.blueprint('App/Models/TherapyPlan', async (faker) => {
  return {
    nama_terapi: faker.sentence(),
    harga: faker.integer(),
    ID_plan: faker.integer({min: 1, max: 20})
  }
})