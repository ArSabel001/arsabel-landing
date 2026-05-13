'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1E]/80 backdrop-blur-lg border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF7F70] to-[#FF6B5A] flex items-center justify-center">
            <span className="text-white font-bold text-sm">ID</span>
          </div>
          <span className="font-bold text-white text-lg hidden sm:inline">Ingeniería Digital</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-gray-400 hover:text-white transition-colors text-sm">
            Servicios
          </a>
          <a href="#porfolio" className="text-gray-400 hover:text-white transition-colors text-sm">
            Portafolio
          </a>
          <a href="#contacto" className="text-gray-400 hover:text-white transition-colors text-sm">
            Contacto
          </a>
          <button className="px-6 py-2 bg-gradient-to-r from-[#FF7F70] to-[#FF6B5A] text-white rounded-full hover:shadow-lg hover:shadow-[#FF7F70]/50 transition-all text-sm font-semibold">
            Consulta Gratis
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0A0F1E] border-b border-white/5 md:hidden">
            <div className="px-4 py-4 space-y-4">
              <a href="#servicios" className="block text-gray-400 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#porfolio" className="block text-gray-400 hover:text-white transition-colors">
                Portafolio
              </a>
              <a href="#contacto" className="block text-gray-400 hover:text-white transition-colors">
                Contacto
              </a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-[#FF7F70] to-[#FF6B5A] text-white rounded-full hover:shadow-lg transition-all font-semibold">
                Consulta Gratis
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
