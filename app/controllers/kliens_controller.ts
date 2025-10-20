import Klien from '#models/klien'
import type { HttpContext } from '@adonisjs/core/http'

export default class KliensController {
  async index() {
    const kliens = await Klien.all()
    return kliens
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['nama','email','password', 'telepon'])
    const klien = await Klien.create(data)
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
