'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem('arsabel-cookies-accepted')
    if (!consent) {
      // Delay slightly for a smoother entry micro-animation
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('arsabel-cookies-accepted', 'true')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('arsabel-cookies-accepted', 'false')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="w-full max-w-4xl bg-white/80 dark:bg-background/80 backdrop-blur-lg border border-primary/10 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        
        {/* Left Section: Icon & Text */}
        <div className="flex items-start gap-4 text-left w-full md:w-auto">
          <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
            <Cookie className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-foreground text-sm sm:text-base">
              Control de Cookies
            </h4>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-2xl">
              Usamos cookies técnicas y analíticas para optimizar tu experiencia y analizar el tráfico de nuestro sitio. Podés aceptar todas las cookies o configurar tus preferencias. Para saber más, leé nuestra{' '}
              <Link 
                href="/cookies" 
                className="text-primary hover:underline font-medium transition"
              >
                Política de Cookies
              </Link>.
            </p>
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-full border border-foreground/10 hover:bg-foreground/5 text-foreground/80 hover:text-foreground transition duration-200"
          >
            Rechazar
          </button>
          <button
            onClick={acceptCookies}
            className="px-5 py-2 text-xs sm:text-sm font-semibold rounded-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Aceptar todo
          </button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 md:relative md:top-auto md:right-auto p-1 text-foreground/40 hover:text-foreground hover:bg-foreground/5 rounded-full transition"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  )
}
