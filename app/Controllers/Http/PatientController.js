'use strict'

// impor kebutuhan package
const { validate } = use('Validator')
const Patient = use('App/Models/Patient')

class PatientController {
  async index ({ request, response }) {
    const patients = await Patient.all()

    return {
      code: 200,
      status: 'OK',
      data: patients
    }
  }

  async show ({ params, request, response }) {
    const id_pasien = params.id

    try {
      const patient = await Patient.find(id_pasien)

      return {
        code: 200,
        status: 'OK',
        data: patient
      }
    } catch(e) {
      console.error(e)

      return {
        code: 400,
        status: 'Data not exist',
        message: e
      }
    }

  }

  async store ({ request, response }) {

    const rules = {
      NIK: 'required|unique:patients',
      nama: 'required',
      jenis_kelamin: 'required'
    }

    const validation = await validate(request.all(), rules)

    if(validation.fails()) {
      return {
        message: validation.messages(),
        status: 'error'
      }
    }

    try {
      const patient = await Patient.create(request.all())

      return {
        code: 200,
        status: 'OK',
        message: 'Data created successfuly',
        data: patient
      }

    } catch(e) {
      console.error(e)

      return {
        code: 500,
        status: 'not OK'
      }
    }
  }
  
}

module.exports = PatientController
