import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Differentials } from '@/components/differentials'
import { TrustMetrics } from '@/components/trust-metrics'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-background">
      <Header />
      <Hero />
      <Differentials />
      <TrustMetrics />
      <CTASection />
      
      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-gradient-to-b from-background to-background/80 border-t border-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <span className="font-bold text-foreground">Arsabel</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Transformamos visiones en soluciones digitales de alto impacto.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Servicios</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition-colors">Desarrollo de Software</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">QA & Testing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Infraestructura Cloud</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contacto</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="mailto:info@arsabel.com" className="hover:text-primary transition-colors">info@arsabel.com</a></li>
                <li><a href="tel:+5491234567890" className="hover:text-primary transition-colors">+54 9 123 456 7890</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/50 text-sm text-center md:text-left">
              © 2024 Arsabel Digital. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm text-foreground/50">
              <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
