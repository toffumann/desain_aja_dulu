import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import logo from '../assets/logo/logo.jpg';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulasi proses login user
    setTimeout(() => {
      // Cek credentials untuk user biasa
      if ((formData.email === 'user@desainajadulu.com' && formData.password === 'user123') ||
          (formData.email === 'client@example.com' && formData.password === 'client123')) {
        console.log('Login user berhasil!');
        
        // Simpan status login user
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', formData.email);
        localStorage.setItem('userRole', 'user'); // Role user biasa
        
        // Redirect ke home page user
        router.visit('/');
        
      } else {
        setError('Email atau password salah!');
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (error) setError('');
  };

  return (
    <>
      <Head title="Login User - Desain Aja Dulu" />
      
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
              <span className="text-xl font-bold text-gray-800">DESAIN AJA DULU</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-purple-600 font-medium">Layanan</Link>
              <Link href="/login" className="text-purple-600 font-medium border-b-2 border-purple-600">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            {/* Login Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <img 
                    src={logo}
                    alt="Desain Aja Dulu"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Login User</h1>
                <p className="text-gray-600">
                  Masuk untuk melihat project dan status desain Anda
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">⚠</span>
                    <p className="text-red-700 font-medium">{error}</p>
                  </div>
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="email@anda.com"
                    disabled={isLoading}
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 pr-12"
                      placeholder="Masukkan password"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      disabled={isLoading}
                    >
                      {showPassword ? '🙈' : '👁'}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      disabled={isLoading}
                    />
                    <span className="ml-2 text-sm text-gray-700">Ingat saya</span>
                  </label>
                  
                  <Link 
                    href="/forgot-password" 
                    className="text-sm text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Lupa password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition duration-300 shadow-lg ${
                    isLoading
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl transform hover:-translate-y-0.5'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Memproses...</span>
                    </div>
                  ) : (
                    'Masuk ke Akun Saya'
                  )}
                </button>
              </form>

              {/* Additional Links */}
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  Belum punya akun?
                </p>
                <Link 
                  href="" 
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300 inline-block"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                Login ini khusus untuk client yang sedang memiliki project desain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; 2024 DESAIN AJA DULU. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}