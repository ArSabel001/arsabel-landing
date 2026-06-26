import Link from 'next/link'
import { ArrowLeft, Trash2, ShieldAlert, Mail, UserCheck } from 'lucide-react'

export default function DataDeletionInstructions() {
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
              <Trash2 size={24} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Instrucciones de Eliminación de Datos
            </h1>
            <p className="text-sm text-foreground/60">
              Última actualización: 26 de junio de 2026
            </p>
            <p className="text-foreground/80 leading-relaxed">
              De acuerdo con las normativas globales de protección de datos (incluyendo el RGPD, la Ley N° 25.326 de Protección de Datos Personales en Argentina y las políticas de Meta/Facebook), en <strong>Arsabel Digital</strong> garantizamos tu derecho a eliminar tu información personal de nuestras bases de datos en cualquier momento.
            </p>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/5 space-y-2">
              <div className="text-primary flex items-center gap-2 font-semibold text-sm">
                <Trash2 size={16} /> Supresión Total
              </div>
              <p className="text-xs text-foreground/70">
                Eliminamos por completo tus registros de contacto de nuestros sistemas y herramientas de marketing.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/5 space-y-2">
              <div className="text-secondary flex items-center gap-2 font-semibold text-sm">
                <Mail size={16} /> Vía Email Directa
              </div>
              <p className="text-xs text-foreground/70">
                Solo necesitás enviar un correo para iniciar el proceso. Sin cuestionamientos ni demoras innecesarias.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-accent/10 border border-accent/10 space-y-2">
              <div className="text-accent-foreground flex items-center gap-2 font-semibold text-sm">
                <UserCheck size={16} /> Confirmación
              </div>
              <p className="text-xs text-foreground/70">
                Te notificaremos formalmente por correo una vez que la supresión de datos haya sido completada con éxito.
              </p>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-6 text-foreground/80 leading-relaxed text-sm sm:text-base">
            
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-foreground">¿Qué información almacenamos?</h2>
              <p>
                Únicamente recolectamos información personal que nos proporcionás de forma voluntaria a través de nuestros formularios de contacto, tales como:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Nombre y apellido.</li>
                <li>Dirección de correo electrónico.</li>
                <li>Número de teléfono de contacto.</li>
                <li>Mensajes o consultas enviadas voluntariamente.</li>
              </ul>
            </section>

            <section className="space-y-3 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">Pasos para solicitar la eliminación de datos</h2>
              <p>
                Si deseás que eliminemos tu información de contacto de nuestros registros, seguí estos sencillos pasos:
              </p>
              <ol className="list-decimal pl-6 space-y-3 mt-2 font-medium text-foreground">
                <li className="font-normal text-foreground/80">
                  <strong className="text-foreground">Envia un correo electrónico:</strong> Escribinos a{' '}
                  <a href="mailto:info@arsabel.com" className="text-primary hover:underline font-semibold">
                    info@arsabel.com
                  </a>.
                </li>
                <li className="font-normal text-foreground/80">
                  <strong className="text-foreground">Especificá el asunto:</strong> Utilizá el asunto &quot;<strong>Eliminación de Datos Personales</strong>&quot; o &quot;<strong>Meta Data Deletion Request</strong>&quot;.
                </li>
                <li className="font-normal text-foreground/80">
                  <strong className="text-foreground">Proporcioná tus datos identificativos:</strong> Indicanos tu nombre y la dirección de correo electrónico con la que nos contactaste originalmente para poder localizar tus registros.
                </li>
              </ol>
            </section>

            <section className="space-y-3 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">Plazos de procesamiento</h2>
              <p>
                Una vez recibida tu solicitud, nuestro equipo de soporte validará la identidad y procederá a la supresión definitiva de todos tus datos personales de nuestras bases de datos activas en un plazo máximo de <strong>72 horas hábiles</strong>. Te enviaremos una notificación confirmando la eliminación total.
              </p>
            </section>

            <section className="space-y-3 border-t border-primary/10 pt-6">
              <h2 className="text-xl font-bold text-foreground">Solicitudes de Aplicaciones de Terceros (Meta / Facebook)</h2>
              <p>
                Si interactuaste con nuestras campañas a través de Meta (Facebook Leads, Instagram, etc.) y deseas revocar el acceso o eliminar los datos recolectados mediante estas herramientas, podés solicitar la supresión siguiendo los pasos indicados arriba. Adicionalmente, podés gestionar y remover los accesos autorizados a aplicaciones externas directamente desde tu perfil de Meta en la sección de <a href="https://www.facebook.com/settings?tab=applications" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Configuración de Aplicaciones y Sitios Web</a>.
              </p>
            </section>
            
          </div>
          
        </div>
      </main>
    </div>
  )
}
