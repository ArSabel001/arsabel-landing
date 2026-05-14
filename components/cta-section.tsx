'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-background to-background/80 overflow-hidden">
      {/* Decorative orbs */}
      <div className="floating-orb orb-pink w-72 h-72 top-1/2 -left-36" />
      <div className="floating-orb orb-teal w-64 h-64 bottom-20 -right-32" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
            Transforma tu visión en resultados medibles
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Nuestro equipo de expertos está listo para llevar tu estrategia digital al siguiente nivel con soluciones técnicas comprobadas.
          </p>
        </div>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:scale-105 text-white font-semibold rounded-full transition-all duration-300 shadow-lg">
            <MessageCircle size={20} />
            Consultoría Gratuita
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-4 soft-card text-primary font-semibold rounded-full transition-all duration-300 hover:border-primary group">
            Ver Portafolio
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust badge */}
        <div className="pt-8 flex justify-center">
          <div className="soft-card px-6 py-3 rounded-full border-2 border-primary/20 flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-white"></div>
            </div>
            <div className="text-sm text-foreground/70">
              Únete a <span className="font-semibold text-foreground">50+ clientes</span> satisfechos
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
