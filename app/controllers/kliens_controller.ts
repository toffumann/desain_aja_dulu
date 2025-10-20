import Klien from '#models/klien'
import type { HttpContext } from '@adonisjs/http-server'
import hash from '@adonisjs/core/services/hash'

export default class KliensController {
  async index({}: HttpContext) {
    const kliens = await Klien.all()
    return kliens
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['nama','email','password', 'telepon'])
    const hashpass = await hash.make(data.password)
    const klien = await Klien.create({...data, password: hashpass})
    return response.created(klien)
  }

  async show({ params, response }: HttpContext) {
    const klien = await Klien.findOrFail(params.id)
    return response.ok(klien)
  }

  async update({ params, request, response }: HttpContext) {
    const klien = await Klien.findOrFail(params.id)
    const data = request.only(['nama', 'telepon'])

    klien.merge(data)
    await klien.save()
    return response.ok(klien)
  }

  async destroy({ params, response }: HttpContext) {
    const klien = await Klien.findOrFail(params.id)
    await klien.delete()
    return response.noContent()
  }
}
