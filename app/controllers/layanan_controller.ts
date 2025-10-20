import { HttpContext } from '@adonisjs/core/http'
import Layanan from '#models/layanan'

export default class LayanansController {
  // Tampilkan semua layanan
  async index({ inertia }: HttpContext) {
    const layanans = await Layanan.all()
    
    return inertia.render('layanans/index', { 
      layanans: layanans.map(l => l.serialize()) 
    })
  }

  // Form tambah layanan
  async create({ inertia }: HttpContext) {
    return inertia.render('layanans/create')
  }

  // Simpan layanan baru
  async store({ request, response }: HttpContext) {
    const data = request.only(['namaLayanan', 'deskripsi', 'harga'])
    
    await Layanan.create(data)
    
    return response.redirect().toRoute('layanans.index')
  }

  // Form edit layanan
  async edit({ params, inertia }: HttpContext) {
    const layanan = await Layanan.findOrFail(params.id)
    
    return inertia.render('layanans/edit', { 
      layanan: layanan.serialize() 
    })
  }

  // Update layanan
  async update({ params, request, response }: HttpContext) {
    const layanan = await Layanan.findOrFail(params.id)
    const data = request.only(['namaLayanan', 'deskripsi', 'harga'])
    
    layanan.merge(data)
    await layanan.save()
    
    return response.redirect().toRoute('layanans.index')
  }

  // Hapus layanan
  async destroy({ params, response }: HttpContext) {
    const layanan = await Layanan.findOrFail(params.id)
    
    await layanan.delete()
    
    return response.redirect().toRoute('layanans.index')
  }
}