'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#0D1A2E] to-[#0A0F1E] overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#FF7F70] to-[#25D366] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Transforma tu visión en resultados medibles
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Nuestro equipo de expertos está listo para llevar tu estrategia digital al siguiente nivel con soluciones técnicas comprobadas.
          </p>
        </div>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BA58] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <MessageCircle size={20} />
            Consultoría Gratuita por WhatsApp
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 glassmorphism text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 group">
            Ver Nuestro Portafolio
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust badge */}
        <div className="pt-8 flex justify-center">
          <div className="glassmorphism px-6 py-3 rounded-full border border-white/10 flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#FF7F70]/80 border border-white/20"></div>
              <div className="w-8 h-8 rounded-full bg-blue-500/80 border border-white/20"></div>
              <div className="w-8 h-8 rounded-full bg-[#25D366]/80 border border-white/20"></div>
            </div>
            <div className="text-sm text-gray-300">
              Únete a <span className="font-semibold text-white">50+ clientes</span> satisfechos
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
