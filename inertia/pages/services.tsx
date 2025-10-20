import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import logo from '../assets/logo/logo.png';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 1,
      category: 'web-design',
      icon: '🌐',
      title: 'Web Design',
      description: 'Desain website modern, responsive, dan user-friendly untuk bisnis Anda',
      features: [
        'UI/UX Design Professional',
        'Website Responsive (Mobile & Desktop)',
        'Landing Page Design',
        'E-commerce Design',
        'Website Redesign'
      ],
      price: 'Mulai dari Rp 2.500.000',
      timeline: '7-14 hari',
      popular: true
    },
    {
      id: 2,
      category: 'graphic-design',
      icon: '🎨',
      title: 'Desain Grafis',
      description: 'Kreasi visual profesional untuk media promosi dan branding',
      features: [
        'Desain Poster & Banner',
        'Brosur & Katalog Produk',
        'Flyer & Leaflet',
        'Company Profile',
        'Stationery Design'
      ],
      price: 'Mulai dari Rp 500.000',
      timeline: '3-7 hari',
      popular: true
    },
    {
      id: 3,
      category: 'social-media',
      icon: '📱',
      title: 'Social Media Design',
      description: 'Konten visual menarik untuk meningkatkan engagement media sosial',
      features: [
        'Instagram Feed Design',
        'Story & Reels Design',
        'Facebook Cover & Post',
        'Twitter Header',
        'Social Media Kit Lengkap'
      ],
      price: 'Paket mulai Rp 1.200.000/bulan',
      timeline: '1-3 hari per post',
      popular: false
    },
    {
      id: 4,
      category: 'presentation',
      icon: '📊',
      title: 'Presentasi Visual',
      description: 'Slide deck profesional dan engaging untuk presentasi bisnis',
      features: [
        'PowerPoint Design Profesional',
        'Pitch Deck untuk Investor',
        'Annual Report Design',
        'Training Material',
        'Infographic Slide'
      ],
      price: 'Mulai dari Rp 300.000/slide',
      timeline: '2-5 hari',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Semua Layanan' },
    { id: 'web-design', name: 'Web Design' },
    { id: 'graphic-design', name: 'Desain Grafis' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'presentation', name: 'Presentasi' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <>
      <Head title="Layanan Desain - Desain Aja Dulu" />
      
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-1">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src={logo}
                alt="Desain Aja Dulu"
                className="h-16 w-16 object-contain" 
              />
              <span className="text-xl font-bold text-gray-800 mt-2">DESAIN AJA DULU</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
              <Link href="/services" className="text-orange-600 font-medium border-b-2 border-orange-600">Layanan</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-orange-600 font-medium">Portfolio</Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">Tentang Kami</Link>
              <Link 
                href="/consultation" 
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300 font-medium"
              >
                Konsultasi
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan Desain Profesional</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Solusi lengkap untuk kebutuhan desain digital bisnis Anda. Dari website hingga konten media sosial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/portfolio" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition duration-300"
            >
              Lihat Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Filter */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pilih Kategori Layanan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan layanan desain yang tepat untuk kebutuhan digital bisnis Anda
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition duration-300 ${
                  activeCategory === category.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div 
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 border-2 ${
                  service.popular ? 'border-orange-500 relative' : 'border-transparent'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  {/* Service Icon & Title */}
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Timeline */}
                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 font-medium">Investasi:</span>
                      <span className="font-bold text-orange-600 text-lg">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">Waktu Pengerjaan:</span>
                      <span className="font-medium text-gray-800">{service.timeline}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    href={`/consultation?service=${service.category}`}
                    className={`w-full block text-center py-4 px-6 rounded-lg font-bold text-lg transition duration-300 ${
                      service.popular
                        ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg'
                        : 'bg-gray-100 text-orange-600 hover:bg-orange-600 hover:text-white'
                    }`}
                  >
                    {service.popular ? '🔥 Pesan Sekarang' : 'Pesan Layanan'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Keunggulan yang membuat kami berbeda dalam melayani kebutuhan desain Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Proses Cepat</h3>
              <p className="text-gray-600">
                Tim kami bekerja efisien dengan timeline yang jelas dan terprediksi
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Hasil Berkualitas</h3>
              <p className="text-gray-600">
                Desain profesional yang sesuai dengan kebutuhan dan target audience bisnis Anda
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                💬
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Support Responsif</h3>
              <p className="text-gray-600">
                Tim support yang selalu siap membantu dan merespon kebutuhan Anda dengan cepat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Cara Kerja Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proses sederhana untuk memulai project desain Anda
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Konsultasi', desc: 'Diskusikan kebutuhan dan tujuan desain' },
              { step: '2', title: 'Penawaran', desc: 'Terima quotation harga dan timeline' },
              { step: '3', title: 'Pengerjaan', desc: 'Tim kami membuat desain sesuai brief' },
              { step: '4', title: 'Revisi & Final', desc: 'Review dan revisi hingga Anda puas' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Tingkatkan Bisnis dengan Desain Profesional?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Mulai percakapan dengan tim kami dan dapatkan solusi desain terbaik untuk kebutuhan bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consultation" 
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition duration-300 shadow-lg"
            >
              💬 Konsultasi Sekarang
            </Link>
            <a 
              href="https://wa.me/628123456789?text=Halo%20Desain%20Aja%20Dulu,%20saya%20ingin%20tanya%20tentang%20layanan%20desain"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition duration-300 flex items-center justify-center space-x-2"
            >
              <span>📱</span>
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={logo}
                  alt="Desain Aja Dulu"
                  className="h-12 w-12 object-contain"
                />
                <h3 className="text-2xl font-bold">DESAIN AJA DULU</h3>
              </div>
              <p className="text-orange-200">
                Specialist dalam Web Design, Desain Grafis, Social Media Design, dan Presentasi Visual untuk kebutuhan bisnis modern.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Layanan Kami</h4>
              <ul className="space-y-2 text-orange-200">
                <li><Link href="/services?category=web-design" className="hover:text-white transition duration-300">Web Design</Link></li>
                <li><Link href="/services?category=graphic-design" className="hover:text-white transition duration-300">Desain Grafis</Link></li>
                <li><Link href="/services?category=social-media" className="hover:text-white transition duration-300">Social Media Design</Link></li>
                <li><Link href="/services?category=presentation" className="hover:text-white transition duration-300">Presentasi Visual</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Perusahaan</h4>
              <ul className="space-y-2 text-orange-200">
                <li><Link href="/about" className="hover:text-white transition duration-300">Tentang Kami</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition duration-300">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-white transition duration-300">Blog & Tips</Link></li>
                <li><Link href="/contact" className="hover:text-white transition duration-300">Kontak</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Kontak</h4>
              <ul className="space-y-2 text-orange-200">
                <li>📧 hello@desainajadulu.com</li>
                <li>📱 (021) 1234-5678</li>
                <li>📍 Palu, Indonesia</li>
                <li>🕒 Senin - Jumat: 09:00 - 18:00</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-orange-700 mt-8 pt-8 text-center text-orange-300">
            <p>&copy; 2024 DESAIN AJA DULU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}