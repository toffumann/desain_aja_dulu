import React, { useState, useEffect } from 'react'; 
import { Head, Link } from '@inertiajs/react';
import logo from '../assets/logo/logo.jpg';
import waLogo from '../assets/whatsapp.png';
import mapsLogo from '../assets/maps.png';
import mailLogo from '../assets/mail.png';

export default function Home  () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const email = localStorage.getItem('userEmail') || '';
    
    setIsLoggedIn(loggedIn);
    setUserEmail(email);
  }, []);

  // Fungsi logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setUserEmail('');
    window.location.href = '/';
  };

  // Data project user (contoh)
  const userProjects = [
    { 
      id: 1, 
      name: 'Logo Perusahaan ABC', 
      status: 'Dalam Pengerjaan', 
      progress: 75,
      deadline: '15 Des 2024',
      designer: 'Ahmad'
    },
    { 
      id: 2, 
      name: 'Social Media Kit XYZ', 
      status: 'Review', 
      progress: 90,
      deadline: '20 Des 2024',
      designer: 'Sari'
    },
    { 
      id: 3, 
      name: 'Company Profile DEF', 
      status: 'Selesai', 
      progress: 100,
      deadline: '5 Des 2024',
      designer: 'Budi'
    }
  ];

  const services = [
    {
      icon: '🎨',
      title: 'Desain Grafis',
      description: 'Poster, banner, brosur, dan materi promosi visual lainnya'
    },
    {
      icon: '📱',
      title: 'Social Media Design',
      description: 'Desain konten Instagram, Facebook, dan platform sosial lainnya'
    },
    {
      icon: '🌐',
      title: 'Web Design',
      description: 'Website modern, responsive, dan user-friendly untuk bisnis Anda'
    },
    {
      icon: '📊',
      title: 'Presentasi Visual',
      description: 'Slide deck profesional untuk meeting dan pitching'
    }
  ];

  return (
    <>
      <Head title="DESAIN AJA DULU" />
      
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
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium">
                Layanan
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">
                Tentang Kami
              </Link>
              
              {/* Tampilkan berdasarkan status login */}
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-700">{userEmail}</p>
                    <p className="text-xs text-gray-500">Client Area</p>
                  </div>
                  <Link 
                    href="/my-projects" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
                  >
                    Project Saya
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 font-medium"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  href="/login" 
                  className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300 font-medium"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex flex-col space-y-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
              <span className="w-6 h-0.5 bg-gray-800"></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium py-2">
                  Home
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-orange-600 font-medium py-2">
                  Layanan
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium py-2">
                  Tentang Kami
                </Link>
                
                {isLoggedIn ? (
                  <>
                    <div className="text-center text-sm text-gray-600 py-2 border-b pb-4">
                      <p className="font-medium">{userEmail}</p>
                      <p className="text-xs">Client Area</p>
                    </div>
                    <Link href="/my-projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium text-center">
                      Project Saya
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 font-medium text-center"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link 
                    href="/login" 
                    className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300 font-medium text-center"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage:'url(/inertia/assets/desainn_background.jpg)' }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-white container mx-auto px-6 py-20">
          <div className="max-w-6xl">
            {/* Welcome Section untuk User yang Login */}
            {isLoggedIn && (
              <div className="bg-green-600/90 backdrop-blur-sm rounded-2xl p-6 mb-8 animate-fade-in">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">🎉 Selamat Datang Kembali!</h2>
                    <p className="text-green-100">Halo <strong>{userEmail}</strong>, senang bertemu dengan Anda lagi!</p>
                    <p className="text-green-100 text-sm mt-1">Berikut update terbaru project Anda</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      href="/my-projects" 
                      className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300 text-center"
                    >
                      📋 Lihat Semua Project
                    </Link>
                    <Link 
                      href="/consultation" 
                      className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition duration-300 text-center"
                    >
                      💬 Project Baru
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Project Status Quick View untuk User Login */}
            {isLoggedIn && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-center">📊 Project Aktif Anda</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userProjects.map(project => (
                    <div key={project.id} className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition duration-300">
                      <h4 className="font-semibold mb-2 text-white">{project.name}</h4>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-green-200">Status: {project.status}</span>
                        <span className="text-sm font-bold text-white">{project.progress}%</span>
                      </div>
                      <div className="flex justify-between items-center mb-2 text-xs text-gray-300">
                        <span>Deadline: {project.deadline}</span>
                        <span>Designer: {project.designer}</span>
                      </div>
                      <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            project.progress === 100 ? 'bg-green-500' : 
                            project.progress >= 75 ? 'bg-blue-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <Link 
                        href={`/project/${project.id}`}
                        className="text-center block bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition duration-300 text-sm"
                      >
                        Lihat Detail
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <Link 
                    href="/my-projects" 
                    className="text-green-300 hover:text-green-200 font-medium text-sm"
                  >
                    Lihat semua project →
                  </Link>
                </div>
              </div>
            )}
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                DESAIN AJA DULU
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                Transformasi Ide Menjadi Visual yang Memukau.
              </h2>
              <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
                <strong>Desain Aja Dulu</strong> adalah penyedia layanan jasa desain grafis, 
                social media design, presentasi visual, web design dan konten visual kreatif yang disesuaikan dengan 
                kebutuhan bisnis dan personal Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {isLoggedIn ? (
                  <>
                    <Link 
                      href="/consultation" 
                      className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition duration-300 text-center shadow-lg"
                    >
                      🚀 Project Baru
                    </Link>
                    <Link 
                      href="/my-projects" 
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition duration-300 text-center"
                    >
                      📂 Project Saya
                    </Link>
                  </>
                ) : (
                  <>
                    <Link 
                      href="/login" 
                      className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition duration-300 text-center shadow-lg"
                    >
                      Login
                    </Link>
                    <Link 
                      href="/services" 
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition duration-300 text-center"
                    >
                      Lihat Layanan ›
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Layanan Desain Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Berbagai solusi desain kreatif untuk semua kebutuhan visual bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300 hover:border-orange-500 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                {isLoggedIn ? (
                  <Link 
                    href="/consultation"
                    className="inline-block mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition duration-300"
                  >
                    Pesan Layanan
                  </Link>
                ) : (
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block mt-4 text-orange-600 font-semibold hover:text-orange-800"
                  >
                    Lihat Contoh ›
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isLoggedIn ? 'Butuh Project Desain Baru?' : 'Siap Mengubah Ide Menjadi Desain Menakjubkan?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {isLoggedIn 
              ? "Tim kami siap membantu mewujudkan ide-ide kreatif Anda. Ajukan project baru sekarang!"
              : "Konsultasikan kebutuhan desain Anda dengan tim kreatif kami dan dapatkan solusi visual yang tepat."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isLoggedIn ? (
              <>
                <Link 
                  href="/consultation" 
                  className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition duration-300"
                >
                  💬 Ajukan Project Baru
                </Link>
                <Link 
                  href="/my-projects" 
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition duration-300"
                >
                  📋 Kelola Project
                </Link>
              </>
            ) : (
              <>
                <Link 
                  href="/consultation" 
                  className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition duration-300"
                >
                  Mulai Project Desain
                </Link>
                <Link 
                  href="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition duration-300"
                >
                  Lihat Layanan
                </Link>
              </>
            )}
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
                  className="h-14 w-14 object-contain"
                />
                <h3 className="text-2xl font-bold">DESAIN AJA DULU</h3>
              </div>
              <p className="text-orange-200">
                Partner kreatif terpercaya untuk solusi desain grafis dan visual konten 
                dengan kualitas premium dan harga terjangkau.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Layanan</h4>
              <ul className="space-y-2 text-orange-200">
                <li><Link href="/services" className="hover:text-white transition duration-300">Desain Grafis</Link></li>
                <li><Link href="/services" className="hover:text-white transition duration-300">Social Media Design</Link></li>
                <li><Link href="/services" className="hover:text-white transition duration-300">Web Design</Link></li>
                <li><Link href="/services" className="hover:text-white transition duration-300">Presentasi Visual</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">{isLoggedIn ? 'Client Area' : 'Perusahaan'}</h4>
              <ul className="space-y-2 text-orange-200">
                {isLoggedIn ? (
                  <>
                    <li><Link href="/my-projects" className="hover:text-white transition duration-300">Project Saya</Link></li>
                    <li><Link href="/consultation" className="hover:text-white transition duration-300">Project Baru</Link></li>
                    <li><Link href="/messages" className="hover:text-white transition duration-300">Pesan</Link></li>
                    <li><Link href="/support" className="hover:text-white transition duration-300">Bantuan</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link href="/about" className="hover:text-white transition duration-300">Tentang Kami</Link></li>
                    <li><Link href="/services" className="hover:text-white transition duration-300">Layanan</Link></li>
                    <li><Link href="/blog" className="hover:text-white transition duration-300">Blog & Tips</Link></li>
                    <li><Link href="/contact" className="hover:text-white transition duration-300">Kontak</Link></li>
                  </>
                )}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Kontak</h4>
              <ul className="space-y-2 text-orange-200">
                <li className="flex items-center space-x-2">
                  <img src={mailLogo} alt="Email" className="h-5 w-5 object-contain" />
                  <span>hello@desainajadulu.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={waLogo} alt="WhatsApp" className="h-5 w-5 object-contain" />
                  <span>(021) 1234-5678</span>
                </li>
                <li className="flex items-center space-x-2">
                  <img src={mapsLogo} alt="Maps" className="h-5 w-5 object-contain" />
                  <span>Palu, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-orange-700 mt-8 pt-8 text-center text-orange-300">
            <p>&copy; 2024 DESAIN AJA DULU. All rights reserved.</p>
            {isLoggedIn && (
              <p className="text-sm mt-2">Login sebagai: {userEmail}</p>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}