'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Decorative orbs */}
      <div className="floating-orb orb-pink w-96 h-96 top-20 -left-48" />
      <div className="floating-orb orb-teal w-80 h-80 top-1/2 -right-40" />
      <div className="floating-orb orb-lavender w-72 h-72 bottom-20 left-1/3" />
      <div className="floating-orb orb-gold w-64 h-64 -bottom-20 right-1/4" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Heading with gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Marketing Digital
            </span>
            <br />
            <span className="text-foreground">que vende</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Kombinamos desarrollo técnico robusto con estrategias de marketing que convierten. Meta Ads, tracking avanzado e infraestructura profesional.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              Comenzar Ahora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-secondary bg-white/50 backdrop-blur text-secondary rounded-full font-bold text-lg hover:bg-secondary/10 transition-all flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              WhatsApp
            </button>
          </div>

          {/* Cards showcase */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Analytics Card */}
            <div className="soft-card p-6 rounded-2xl">
              <div className="mb-4 inline-block bg-accent/20 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-accent">Meta Ads & Analytics</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Campañas que Crecen</h3>
              <p className="text-foreground/60 text-sm mb-4">
                Tracking avanzado, optimización en tiempo real y ROI garantizado.
              </p>
              <div className="h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-end justify-around p-3">
                <div className="w-8 h-12 bg-primary/40 rounded" />
                <div className="w-8 h-16 bg-primary/60 rounded" />
                <div className="w-8 h-20 bg-primary rounded" />
                <div className="w-8 h-14 bg-primary/50 rounded" />
              </div>
            </div>

            {/* Code Card */}
            <div className="soft-card p-6 rounded-2xl">
              <div className="mb-4 inline-block bg-accent/20 px-3 py-1 rounded-full">
                <span className="text-sm font-semibold text-accent">Ingeniería de Software</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Código que Escala</h3>
              <p className="text-foreground/60 text-sm mb-4">
                Arquitectura moderna, testing riguroso y despliegue automatizado.
              </p>
              <div className="bg-foreground/5 rounded-lg p-3 font-mono text-sm overflow-hidden">
                <div className="text-secondary">const</div>
                <div className="text-foreground">
                  <span className="text-primary">campaign</span> = <span className="text-secondary">grow</span>()
                </div>
                <div className="text-foreground/50">// Scaling infinitely</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
