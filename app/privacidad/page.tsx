import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, RefreshCw } from 'lucide-react'

export default function PrivacyPolicy() {
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
              <Shield size={24} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Política de Privacidad
            </h1>
            <p className="text-sm text-foreground/60">
              Última actualización: 25 de junio de 2026
            </p>
            <p className="text-foreground/80 leading-relaxed">
              En <strong>Arsabel Digital</strong>, nos tomamos muy en serio la privacidad de tus datos. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos la información personal que nos proporcionás al visitar nuestro sitio web o interactuar con nuestros servicios de marketing y desarrollo de software.
            </p>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/5 space-y-2">
              <div className="text-primary flex items-center gap-2 font-semibold text-sm">
                <Eye size={16} /> Transparencia
              </div>
              <p className="text-xs text-foreground/70">
                Detallamos con exactitud qué datos recopilamos y para qué fines comerciales los usamos.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/5 space-y-2">
              <div className="text-secondary flex items-center gap-2 font-semibold text-sm">
                <Lock size={16} /> Seguridad
              </div>
              <p className="text-xs text-foreground/70">
                Implementamos estándares de encriptación y protección física y lógica en todos nuestros entornos.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/10 space-y-2">
              <div className="text-accent-foreground flex items-center gap-2 font-semibold text-sm">
                <RefreshCw size={16} /> Tus Derechos
              </div>
              <p className="text-xs text-foreground/70">
                Podés acceder, rectificar o solicitar la eliminación total de tus datos personales cuando quieras.
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6 text-foreground/80 leading-relaxed text-sm sm:text-base">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. Responsable del Tratamiento de Datos</h2>
              <p>
                El responsable legal del tratamiento de los datos recopilados en este sitio web es <strong>Arsabel Digital</strong>. Si tenés alguna pregunta, inquietud o querés ejercer tus derechos de privacidad, podés contactarnos de manera directa mediante:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Correo electrónico:</strong> <a href="mailto:info@arsabel.com" className="text-primary hover:underline">info@arsabel.com</a></li>
                <li><strong>Teléfono de contacto:</strong> +54 9 123 456 7890</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">2. Datos que Recopilamos</h2>
              <p>
                Recopilamos información únicamente cuando es estrictamente necesario para brindarte nuestros servicios o mejorar tu experiencia en nuestro sitio. Estos datos incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Datos proporcionados voluntariamente:</strong> Nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que decidas enviarnos a través de nuestros formularios de contacto, cotización o suscripción.
                </li>
                <li>
                  <strong>Datos recopilados de forma automática:</strong> Información técnica sobre tu dispositivo y navegación, tales como la dirección IP simplificada, tipo de navegador, sistema operativo, páginas visitadas y el tiempo de permanencia. Esta información se recopila a través de herramientas de analítica web.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">3. Finalidad del Tratamiento</h2>
              <p>
                En Arsabel Digital utilizamos tus datos personales para las siguientes finalidades específicas:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responder a tus consultas, solicitudes de cotización o mensajes directos.</li>
                <li>Enviar información comercial, newsletters o actualizaciones sobre nuestros servicios (siempre y cuando hayas otorgado tu consentimiento explícito).</li>
                <li>Optimizar el rendimiento técnico de nuestro sitio y la experiencia de usuario.</li>
                <li>Medir la efectividad de nuestras campañas de marketing (Meta Ads, Google Ads).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">4. Legitimación del Tratamiento</h2>
              <p>
                La base legal para procesar tus datos depende de la interacción:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Consentimiento del usuario:</strong> Al completar y enviar voluntariamente nuestros formularios de contacto o aceptar el uso de cookies de marketing y análisis.</li>
                <li><strong>Relación precontractual o contractual:</strong> Cuando los datos son necesarios para elaborar una propuesta comercial o prestar un servicio contratado.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">5. Destinatarios y Proveedores de Terceros</h2>
              <p>
                No vendemos, alquilamos ni compartimos tus datos personales con terceros para fines comerciales propios de ellos. Sin embargo, para poder operar y optimizar nuestro sitio, integramos servicios de proveedores tecnológicos líderes que cumplen con estrictas normas de privacidad:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Vercel & Analytics:</strong> Hospedaje de nuestro sitio web y medición de tráfico de forma anónima y segura.</li>
                <li><strong>Meta Pixel & Google Analytics:</strong> Herramientas de tracking avanzado para medir conversiones y optimizar nuestras pautas publicitarias de manera eficiente y respetando las configuraciones de privacidad del navegador.</li>
              </ul>
            </section>

            <section id="cookies" className="space-y-3 scroll-mt-20 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">6. Política de Cookies</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo al visitar nuestro sitio. Utilizamos cookies técnicas (esenciales para el funcionamiento del sitio) y cookies analíticas/de marketing.
              </p>
              <p><strong>Tipos de cookies que utilizamos:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Esenciales:</strong> Permiten la navegación fluida y la configuración de preferencias básicas de seguridad. No se pueden desactivar ya que el sitio no funcionaría correctamente sin ellas.
                </li>
                <li>
                  <strong>Analíticas y de Marketing:</strong> Nos ayudan a entender el comportamiento de los visitantes, rastrear conversiones de anuncios de Meta y mejorar nuestro embudo de ventas de forma cuantitativa.
                </li>
              </ul>
              <p>
                Podés configurar, bloquear o eliminar las cookies en cualquier momento a través de la configuración de tu navegador (Chrome, Safari, Firefox, Edge, etc.). Si desactivás todas las cookies, es posible que algunas funcionalidades del sitio no se desplieguen correctamente.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">7. Seguridad de los Datos</h2>
              <p>
                Adoptamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra accesos no autorizados, pérdidas, alteraciones o divulgaciones indebidas. Entre estas medidas se incluyen el uso de protocolos seguros de transferencia (HTTPS/SSL), cortafuegos y el almacenamiento de datos en servidores de alto prestigio y seguridad certificada.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">8. Tus Derechos</h2>
              <p>
                Tenés derecho a tener el control total sobre tus datos personales. De acuerdo con las regulaciones de protección de datos vigentes (incluyendo la Ley N° 25.326 de Protección de Datos Personales en Argentina y normativas internacionales equivalentes), podés ejercer los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Acceso:</strong> Solicitar información sobre qué datos personales tenemos tuyos.</li>
                <li><strong>Rectificación:</strong> Corregir o actualizar cualquier dato que sea inexacto o incompleto.</li>
                <li><strong>Supresión (Olvido):</strong> Solicitar que eliminemos de forma definitiva tus datos de nuestras bases activas.</li>
                <li><strong>Revocación:</strong> Retirar el consentimiento otorgado para el envío de comunicaciones comerciales en cualquier momento.</li>
              </ul>
              <p>
                Para ejercer cualquiera de estos derechos, simplemente envianos un correo a <a href="mailto:info@arsabel.com" className="text-primary hover:underline">info@arsabel.com</a> con el asunto &quot;Derechos de Privacidad&quot; y responderemos a tu solicitud a la brevedad.
              </p>
            </section>

            <section className="space-y-3 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">9. Cambios en esta Política</h2>
              <p>
                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento para adaptarla a novedades legislativas, jurisprudenciales o prácticas del sector. Te recomendamos revisar esta página periódicamente para mantenerte informado sobre cómo protegemos tu información.
              </p>
            </section>
            
          </div>
          
        </div>
      </main>
    </div>
  )
}
