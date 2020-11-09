'use strict'

const Subjective = use('App/Models/Subjective')

class SubjectiveController {

  async index ({ request, response }) {

    try {
      const subjectives = await Subjective.all()

      return {
        code: 200,
        status: 'OK',
        data: subjectives
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

  async create ({ request, response }) {
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response }) {
    const id_subjective = params.id

    try {

      const subjective = await Subjective.find(id_subjective)

      return {
        code: 200,
        status: 'OK',
        data: subjective
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

  async edit ({ params, request, response }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = SubjectiveController
