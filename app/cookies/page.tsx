import Link from 'next/link'
import { ArrowLeft, Cookie, Shield, Lock, Eye } from 'lucide-react'

export default function CookiesPolicy() {
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
              <Cookie size={24} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Política de Cookies
            </h1>
            <p className="text-sm text-foreground/60">
              Última actualización: 26 de junio de 2026
            </p>
            <p className="text-foreground/80 leading-relaxed">
              En <strong>Arsabel Digital</strong> utilizamos cookies y tecnologías similares para mejorar la navegación en nuestro sitio web, analizar el tráfico, y optimizar nuestras campañas de marketing. En esta página te explicamos detalladamente qué son, cuáles usamos y cómo podés controlarlas.
            </p>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/5 space-y-2">
              <div className="text-primary flex items-center gap-2 font-semibold text-sm">
                <Shield size={16} /> Seguridad
              </div>
              <p className="text-xs text-foreground/70">
                Las cookies esenciales protegen tu sesión y evitan ataques maliciosos de suplantación de identidad.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/5 space-y-2">
              <div className="text-secondary flex items-center gap-2 font-semibold text-sm">
                <Eye size={16} /> Análisis
              </div>
              <p className="text-xs text-foreground/70">
                Medimos de forma anónima las visitas para saber qué servicios y contenidos resultan más interesantes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/10 space-y-2">
              <div className="text-accent-foreground flex items-center gap-2 font-semibold text-sm">
                <Lock size={16} /> Privacidad
              </div>
              <p className="text-xs text-foreground/70">
                Respetamos tus decisiones. Podés rechazar o configurar las cookies analíticas en cualquier momento.
              </p>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-6 text-foreground/80 leading-relaxed text-sm sm:text-base">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador o dispositivo cuando los visitás. Sirven para recordar tus preferencias, mejorar la usabilidad del sitio, y proveer información estadística a los propietarios de la web.
              </p>
            </section>

            <section className="space-y-3 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">2. Tipos de cookies que utilizamos</h2>
              <p>
                Clasificamos las cookies en las siguientes categorías según su finalidad:
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-2">
                <li>
                  <strong>Cookies Técnicas (Esenciales):</strong> Son imprescindibles para que el sitio web funcione correctamente. Te permiten navegar por las páginas, mantener la sesión activa, configurar preferencias de seguridad y cargar contenido eficientemente. Estas cookies no requieren consentimiento previo y no se pueden desactivar.
                </li>
                <li>
                  <strong>Cookies de Personalización:</strong> Permiten recordar información para que accedas al sitio con determinadas características que pueden diferenciar tu experiencia de la de otros usuarios (por ejemplo, el idioma o la región).
                </li>
                <li>
                  <strong>Cookies Analíticas y de Rendimiento:</strong> Nos permiten cuantificar el número de visitantes y analizar estadísticamente el uso del sitio. Con estos datos optimizamos el diseño de la web y el rendimiento de nuestros servidores. La información se procesa de forma agregada (anónima).
                </li>
                <li>
                  <strong>Cookies de Publicidad y Seguimiento:</strong> Son aquellas que, tratadas por nosotros o por terceros (como Meta o Google), nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en el sitio web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realices de nuestra página web.
                </li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">3. Detalle de cookies utilizadas</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-primary/15">
                      <th className="py-2 pr-4 font-semibold text-foreground">Origen/Proveedor</th>
                      <th className="py-2 pr-4 font-semibold text-foreground">Nombre</th>
                      <th className="py-2 pr-4 font-semibold text-foreground">Finalidad</th>
                      <th className="py-2 font-semibold text-foreground">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/5">
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Arsabel Digital</td>
                      <td className="py-2 pr-4">arsabel-cookies-accepted</td>
                      <td className="py-2 pr-4">Almacena la preferencia del usuario sobre la aceptación de cookies.</td>
                      <td className="py-2">1 año</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Meta (Facebook)</td>
                      <td className="py-2 pr-4">_fbp, fr</td>
                      <td className="py-2 pr-4">Utilizado por Meta Ads para entregar, medir y mejorar la relevancia de las campañas de anuncios.</td>
                      <td className="py-2">3 meses</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Google Analytics</td>
                      <td className="py-2 pr-4">_ga, _gid</td>
                      <td className="py-2 pr-4">Registra una identificación única que se utiliza para generar datos estadísticos de navegación.</td>
                      <td className="py-2">2 años</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">4. ¿Cómo configurar o eliminar las cookies?</h2>
              <p>
                Podés permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador web. A continuación, te facilitamos los enlaces de ayuda de los principales navegadores:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Google Chrome</a>
                </li>
                <li>
                  <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Safari (Mac / iPhone)</a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Mozilla Firefox</a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-y-administrar-cookies-168dab11-0753-243e-7b0f-5fbd195140f1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Microsoft Edge</a>
                </li>
              </ul>
              <p className="mt-4">
                Tené en cuenta que si desactivás la instalación de cookies, es posible que algunas funcionalidades de nuestro sitio web dejen de estar disponibles o no funcionen de manera óptima.
              </p>
            </section>

            <section className="space-y-3 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">5. Contacto</h2>
              <p>
                Si tenés alguna duda sobre nuestra Política de Cookies, podés contactarnos enviándonos un correo a <a href="mailto:info@arsabel.com" className="text-primary hover:underline">info@arsabel.com</a>.
              </p>
            </section>
            
          </div>
          
        </div>
      </main>
    </div>
  )
}
