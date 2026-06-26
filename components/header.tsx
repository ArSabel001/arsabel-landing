'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hidden sm:inline">
                Arsabel
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/70 hover:text-primary font-medium transition">
              Servicios
            </a>
            <a href="#portfolio" className="text-foreground/70 hover:text-primary font-medium transition">
              Portafolio
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary font-medium transition">
              Contacto
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Consulta Gratis
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-primary/10 space-y-2">
            <a href="#services" className="block py-2 text-foreground/70 hover:text-primary font-medium">
              Servicios
            </a>
            <a href="#portfolio" className="block py-2 text-foreground/70 hover:text-primary font-medium">
              Portafolio
            </a>
            <a href="#contact" className="block py-2 text-foreground/70 hover:text-primary font-medium">
              Contacto
            </a>
            <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transition">
              Consulta Gratis
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
