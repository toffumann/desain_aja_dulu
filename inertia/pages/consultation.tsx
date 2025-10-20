import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import logo from '../assets/logo/logo.png'

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    deadline: '',
    description: ''
  });

  const services = [
    'Desain Grafis (Poster, Banner, Brosur)',
    'Branding Identity (Logo, Brand Guideline)',
    'Ilustrasi Digital',
    'Social Media Design',
    'Presentasi Visual',
    'Packaging Design',
    'Lainnya'
  ];

  const budgetRanges = [
    'Rp 500.000 - 1.000.000',
    'Rp 1.000.000 - 2.500.000',
    'Rp 2.500.000 - 5.000.000',
    'Rp 5.000.000+',
    'Belum pasti, butuh penawaran'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
    alert('Terima kasih! Konsultasi Anda telah dikirim. Kami akan menghubungi dalam 1x24 jam.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head title="Konsultasi Desain - Desain Aja Dulu" />
      
      {/* Navigation - sama seperti home */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-1">
            <Link href="/" className="flex items-center space-x">
              <img 
                src={logo}
                alt="Desain Aja Dulu"
                className="h-16 w-16 object-contain" 
              />
              <span className="text-xl font-bold text-gray-800">DESAIN AJA DULU</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-purple-600 font-medium">Layanan</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-purple-600 font-medium">Portfolio</Link>
              <Link href="/consultation" className="text-purple-600 font-medium border-b-2 border-purple-600">Konsultasi</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Konsultasi Desain Gratis</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Diskusikan kebutuhan desain Anda dengan tim kreatif kami. Dapatkan solusi terbaik untuk bisnis Anda.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Form Konsultasi</h2>
                <p className="text-gray-600">
                  Isi form berikut dan kami akan menghubungi Anda dalam 1x24 jam untuk diskusi lebih lanjut.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Perusahaan/Bisnis
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Nama perusahaan/bisnis Anda"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Layanan yang Dibutuhkan *
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Pilih layanan</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rentang Budget *
                    </label>
                    <select
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Pilih rentang budget</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deadline yang Diinginkan
                  </label>
                  <input
                    type="text"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Contoh: 2 minggu, 1 bulan, urgent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ceritakan Kebutuhan Desain Anda *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Jelaskan secara detail tentang project desain yang Anda butuhkan, tujuan, target audience, dan preferensi style..."
                  ></textarea>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-purple-800">
                    💡 <strong>Tips:</strong> Semakin detail penjelasan Anda, semakin tepat solusi yang bisa kami berikan. 
                    Bisa sertakan referensi desain yang Anda sukai!
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-purple-700 transition duration-300 shadow-lg"
                >
                  Kirim Konsultasi
                </button>

                <p className="text-center text-gray-500 text-sm">
                  Dengan mengirim form ini, Anda menyetujui untuk dihubungi oleh tim kami.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh Konsultasi Cepat?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Hubungi kami langsung via WhatsApp untuk respon lebih cepat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6281244383748?text=Halo%20Desain%20Aja%20Dulu,%20saya%20ingin%20konsultasi%20desain"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition duration-300 flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>Chat via WhatsApp</span>
            </a>
            <Link 
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Lihat Portfolio Dulu
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - sama seperti home */}
      <footer className="bg-purple-900 text-white py-12">
        {/* ... footer code dari home */}
      </footer>
    </>
  );
}