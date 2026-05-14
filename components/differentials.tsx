'use client'

import { Code, BarChart3, Lock } from 'lucide-react'

export function Differentials() {
  const items = [
    {
      icon: Code,
      title: 'Código Escalable',
      description: 'Arquitectura moderna con mejores prácticas, testing riguroso y despliegue automatizado para producción.',
      color: 'from-secondary/10 to-secondary/5',
      iconColor: 'text-secondary'
    },
    {
      icon: BarChart3,
      title: 'Meta Ads Avanzado',
      description: 'Configuración de Pixel y API de Conversiones con tracking en tiempo real y optimización continua.',
      color: 'from-primary/10 to-primary/5',
      iconColor: 'text-primary'
    },
    {
      icon: Lock,
      title: 'Seguridad Completa',
      description: 'SSL certificado, testing de seguridad y compliance garantizado en todas nuestras soluciones.',
      color: 'from-accent/10 to-accent/5',
      iconColor: 'text-accent'
    }
  ]

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-background/50 to-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nuestros Diferenciales
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Capacidades técnicas que garantizan resultados excepcionales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
                
                <div className="relative soft-card rounded-2xl p-8 space-y-4 h-full border-2 border-primary/15 group-hover:border-primary/30 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors ${item.iconColor}`}>
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="pt-4 border-t border-primary/10">
                    <div className="flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                      Conocer más
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
