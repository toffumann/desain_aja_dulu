import { HttpContext } from '@adonisjs/core/http'
import Layanan from '#models/layanan'

export default class HomeController {
  async index({ inertia }: HttpContext) {
    // Ambil data layanan dari database
    const layanans = await Layanan.all()

    // Format data untuk frontend
    const formattedLayanans = layanans.map(layanan => ({
      id: layanan.id,
      icon: this.getIconForService(layanan.nama_layanan),
      title: layanan.nama_layanan,
      description: layanan.deskripsi || 'Deskripsi layanan',
      harga: this.formatHarga(layanan.harga)
    }))

    // Data yang akan dikirim ke frontend
    const pageData = {
      title: 'DESAIN AJA DULU - Solusi Desain Profesional',
      description: 'Transformasi Ide Menjadi Visual yang Memukau.',
      features: formattedLayanans,
      stats: [
        { number: '100+', label: 'Project Selesai' },
        { number: '50+', label: 'Client Puas' },
        { number: '2+', label: 'Tahun Pengalaman' },
        { number: '24/7', label: 'Support' }
      ]
    }

    return inertia.render('home', pageData)
  }

  private getIconForService(namaLayanan: string): string {
    const iconMap: { [key: string]: string } = {
      'Desain Grafis': '🎨',
      'Social Media Design': '📱',
      'Web Design': '🌐',
      'Presentasi Visual': '📊',
      'Branding Identity': '🏷️',
      'Ilustrasi Digital': '✏️'
    }
    return iconMap[namaLayanan] || '🎯'
  }

  private formatHarga(harga: number): string {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(harga)
  }
}