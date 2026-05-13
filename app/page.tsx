import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Differentials } from '@/components/differentials'
import { TrustMetrics } from '@/components/trust-metrics'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-[#0A0F1E]">
      <Header />
      <Hero />
      <Differentials />
      <TrustMetrics />
      <CTASection />
      
      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-black/50 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF7F70] to-[#FF6B5A] flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ID</span>
                </div>
                <span className="font-bold text-white">Ingeniería Digital</span>
              </div>
              <p className="text-gray-500 text-sm">
                Transformamos visiones en soluciones digitales de alto impacto.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Desarrollo de Software</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-white transition-colors">QA & Testing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Infraestructura Cloud</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="mailto:info@ingenieriadigital.com" className="hover:text-white transition-colors">info@ingenieriadigital.com</a></li>
                <li><a href="tel:+5491234567890" className="hover:text-white transition-colors">+54 9 123 456 7890</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © 2024 Ingeniería y Estrategia Digital. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
