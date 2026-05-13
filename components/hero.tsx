'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0A0F1E] via-[#0D1A2E] to-[#0A0F1E] mesh-background">
      {/* Fondo con malla de nodos */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mesh" patternUnits="userSpaceOnUse" width="100" height="100">
              <circle cx="10" cy="10" r="1.5" fill="#FF7F70" opacity="0.4" />
              <circle cx="90" cy="10" r="1.5" fill="#FF7F70" opacity="0.4" />
              <circle cx="50" cy="50" r="1.5" fill="#FF7F70" opacity="0.4" />
              <circle cx="10" cy="90" r="1.5" fill="#FF7F70" opacity="0.4" />
              <circle cx="90" cy="90" r="1.5" fill="#FF7F70" opacity="0.4" />
              <line x1="10" y1="10" x2="90" y2="10" stroke="#FF7F70" strokeWidth="0.5" opacity="0.2" />
              <line x1="10" y1="10" x2="50" y2="50" stroke="#FF7F70" strokeWidth="0.5" opacity="0.2" />
              <line x1="90" y1="10" x2="50" y2="50" stroke="#FF7F70" strokeWidth="0.5" opacity="0.2" />
              <line x1="10" y1="90" x2="50" y2="50" stroke="#FF7F70" strokeWidth="0.5" opacity="0.2" />
              <line x1="90" y1="90" x2="50" y2="50" stroke="#FF7F70" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contenido textual */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                  Ingeniería detrás de tu{' '}
                  <span className="bg-gradient-to-r from-[#FF7F70] to-[#FF6B5A] text-transparent bg-clip-text">
                    estrategia digital
                  </span>
                </h1>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Fusionamos desarrollo de software robusto con marketing digital avanzado. Desde QA riguroso hasta campañas de Meta Ads potentes, transformamos tu visión en resultados medibles.
              </p>

              {/* Botones de conversión */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BA58] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <MessageCircle size={20} />
                  Consultoría Gratuita por WhatsApp
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-4 glassmorphism text-white font-semibold rounded-full transition-all duration-300 hover:bg-opacity-10 group">
                  Ver Servicios de Ingeniería
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card glassmorphism con código y dashboard */}
            <div className="relative h-full min-h-96 animate-float">
              <div className="glassmorphism rounded-2xl p-6 space-y-4 h-full border border-white/10">
                {/* Bloque de código */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF7F70]"></div>
                    <span className="text-sm font-mono text-gray-400">api.config.ts</span>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-sm space-y-2">
                    <div className="text-[#FF7F70]">const</div>
                    <div className="text-blue-400">API_ENDPOINT</div>
                    <div className="text-white">=</div>
                    <div className="text-green-400">&quot;https://api.production.io&quot;</div>
                    <div></div>
                    <div className="text-gray-500">// QA Certificado</div>
                    <div className="text-[#FF7F70]">const</div>
                    <div className="text-blue-400">SSL_VERIFIED</div>
                    <div className="text-white">=</div>
                    <div className="text-green-400">true</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#FF7F70]/30 to-transparent"></div>

                {/* Dashboard de métricas */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#25D366]"></div>
                    <span className="text-sm font-mono text-gray-400">meta.analytics</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-xs text-gray-400">ROAS</div>
                      <div className="text-lg font-bold text-[#25D366]">4.2x</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-xs text-gray-400">Conversiones</div>
                      <div className="text-lg font-bold text-[#25D366]">+156%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7F70] to-[#25D366] rounded-2xl opacity-20 blur-xl -z-10 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
