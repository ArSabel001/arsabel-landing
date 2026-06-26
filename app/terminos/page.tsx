import Link from 'next/link'
import { ArrowLeft, FileText, Scale, UserCheck, AlertTriangle } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen pb-20 font-sans text-foreground">
      {/* Header Simplificado */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Arsabel
              </span>
            </Link>
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm font-semibold text-foreground/75 hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pt-12">
        <div className="soft-card rounded-2xl p-6 sm:p-10 space-y-8 bg-white/70 backdrop-blur-md border border-primary/10 shadow-lg">
          
          {/* Hero Section */}
          <div className="space-y-4 border-b border-primary/10 pb-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <FileText size={24} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Términos y Condiciones
            </h1>
            <p className="text-sm text-foreground/60">
              Última actualización: 25 de junio de 2026
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Te damos la bienvenida al sitio web de <strong>Arsabel Digital</strong>. Estos Términos y Condiciones regulan el acceso, navegación y uso de nuestro sitio. Al acceder o utilizar este sitio web, declarás haber leído, comprendido y aceptado estar sujeto a estas condiciones en su totalidad. Si no estás de acuerdo con alguna parte, te solicitamos que no utilices nuestro sitio ni contrates nuestros servicios a través de este medio.
            </p>
          </div>

          {/* Core Principles Grid */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/5 space-y-2">
              <div className="text-primary flex items-center gap-2 font-semibold text-sm">
                <Scale size={16} /> Marco Legal
              </div>
              <p className="text-xs text-foreground/70">
                Uso regulado conforme a las leyes comerciales y civiles aplicables a servicios de software y publicidad.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/5 space-y-2">
              <div className="text-secondary flex items-center gap-2 font-semibold text-sm">
                <UserCheck size={16} /> Responsabilidad
              </div>
              <p className="text-xs text-foreground/70">
                Compromiso mutuo de buen uso del portal sin alterar o forzar la seguridad del mismo.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/10 space-y-2">
              <div className="text-accent-foreground flex items-center gap-2 font-semibold text-sm">
                <AlertTriangle size={16} /> Límites Claros
              </div>
              <p className="text-xs text-foreground/70">
                La información provista es orientativa y no constituye una garantía contractual implícita de resultados.
              </p>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-6 text-foreground/80 leading-relaxed text-sm sm:text-base">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. Uso del Sitio Web</h2>
              <p>
                Este sitio proporciona información sobre los servicios de desarrollo de software, marketing digital, QA y testing, e infraestructura cloud ofrecidos por Arsabel Digital. El usuario se compromete a hacer un uso lícito, correcto y adecuado de los contenidos y servicios de conformidad con la ley y los presentes Términos y Condiciones.
              </p>
              <p>Queda expresamente prohibido:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Realizar actividades que puedan dañar, inutilizar, sobrecargar o deteriorar el sitio web.</li>
                <li>Utilizar técnicas de scraping, minería de datos o robots para extraer información sin consentimiento expreso por escrito.</li>
                <li>Intentar vulnerar los sistemas de seguridad del sitio, realizar ataques de denegación de servicio (DoS/DDoS) o propagar malware.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. Propiedad Intelectual e Industrial</h2>
              <p>
                Todos los contenidos que se muestran en este sitio (incluyendo, de manera enunciativa pero no limitativa, diseños, logotipos, textos, gráficos, interfaces, iconos, códigos fuente, base de datos y combinaciones de colores) son propiedad exclusiva de <strong>Arsabel Digital</strong> o de sus respectivos licenciantes, y están protegidos por las leyes de propiedad intelectual e industrial locales e internacionales.
              </p>
              <p>
                Queda estrictamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos de nuestro sitio web sin la autorización previa, expresa y por escrito de Arsabel Digital.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">3. Limitación de Responsabilidad</h2>
              <p>
                Hacemos nuestro mayor esfuerzo para mantener el sitio web en funcionamiento continuo y con información veraz y actualizada. Sin embargo, no garantizamos de forma explícita ni implícita la disponibilidad ininterrumpida de la web, la ausencia de errores en los contenidos, ni que el servidor esté 100% libre de virus u otros componentes dañinos.
              </p>
              <p>
                <strong>Arsabel Digital no se hará responsable por:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Daños directos o indirectos derivados de fallos de conexión, interrupciones del servicio, cortes de telecomunicaciones o mal funcionamiento del navegador.</li>
                <li>El uso inadecuado o negligente del sitio web por parte de los usuarios.</li>
                <li>Posibles pérdidas de datos o daños en los equipos de los usuarios debido a ataques de malware o intrusiones de terceros durante la navegación.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. Enlaces a Sitios de Terceros</h2>
              <p>
                Nuestro sitio web puede contener enlaces (links) a plataformas externas o redes sociales (como LinkedIn, GitHub, etc.) que consideramos de interés. Estos enlaces se proporcionan únicamente para comodidad del usuario. Arsabel Digital no ejerce ningún tipo de control ni asume responsabilidad alguna sobre la disponibilidad técnica, calidad, fiabilidad o las políticas de privacidad de los contenidos de dichos sitios externos. El acceso a los mismos se realiza bajo la exclusiva responsabilidad del usuario.
              </p>
            </section>

            <section className="space-y-3 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">5. Cotizaciones y Contratación de Servicios</h2>
              <p>
                La información presentada en la landing page, incluyendo precios estimados, descripciones de servicios o métricas de confianza, tiene carácter netamente informativo y no constituye una oferta comercial vinculante. Cualquier contratación formal de servicios (como campañas de Meta Ads o desarrollo de software a medida) se regulará de forma independiente a través de un <strong>Contrato de Prestación de Servicios</strong> específico firmado por ambas partes, el cual prevalecerá sobre cualquier información dispuesta en esta web.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">6. Modificaciones de las Condiciones</h2>
              <p>
                Nos reservamos el derecho de modificar, actualizar o sustituir estos Términos y Condiciones en cualquier momento y sin previo aviso. Es responsabilidad del usuario revisar periódicamente este documento. El uso continuado del sitio web después de la publicación de cualquier cambio constituye la aceptación implícita de los nuevos términos.
              </p>
            </section>

            <section className="space-y-3 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">7. Ley Aplicable y Jurisdicción</h2>
              <p>
                Para la resolución de todas las disputas, controversias o reclamaciones que surjan de o estén relacionadas con el uso de este sitio web, se aplicará la legislación vigente de la <strong>República Argentina</strong>. Ambas partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a la jurisdicción de los tribunales ordinarios competentes de la Ciudad Autónoma de Buenos Aires.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">8. Contacto</h2>
              <p>
                Si tenés alguna pregunta sobre estos Términos y Condiciones, podés comunicarte con nosotros enviando un correo electrónico a <a href="mailto:info@arsabel.com" className="text-primary hover:underline">info@arsabel.com</a>.
              </p>
            </section>
            
          </div>
          
        </div>
      </main>
    </div>
  )
}
