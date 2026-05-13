'use client'

import { Server, Zap, Shield } from 'lucide-react'

export function Differentials() {
  const items = [
    {
      icon: Server,
      title: 'Infraestructura Pro',
      description: 'Despliegue en VPS (Hetzner/Contabo) para carga instantánea y máximo rendimiento en producción.',
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Meta Ads & Tracking',
      description: 'Configuración avanzada de API de Conversiones y Pixel para máxima precisión en tus campañas.',
      color: 'from-[#FF7F70]/20 to-[#FF6B5A]/20',
      iconColor: 'text-[#FF7F70]'
    },
    {
      icon: Shield,
      title: 'QA & Seguridad',
      description: 'Software testeado rigurosamente y certificado SSL incluido en todas nuestras soluciones.',
      color: 'from-[#25D366]/20 to-[#20BA58]/20',
      iconColor: 'text-[#25D366]'
    }
  ]

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#0A0F1E] to-[#0D1A2E] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Diferenciales Técnicos
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nuestras capacidades especializadas garantizan resultados excepcionales
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
                
                <div className="relative glassmorphism rounded-2xl p-8 space-y-4 h-full border border-white/5 group-hover:border-white/20 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors ${item.iconColor}`}>
                    <Icon size={28} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
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
