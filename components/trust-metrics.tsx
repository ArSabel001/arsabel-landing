'use client'

export function TrustMetrics() {
  const metrics = [
    {
      number: '50+',
      label: 'Clientes Satisfechos',
      color: 'from-primary'
    },
    {
      number: '15+',
      label: 'Proyectos Exitosos',
      color: 'from-secondary'
    },
    {
      number: '100%',
      label: 'Retención',
      color: 'from-accent'
    }
  ]

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-background/50 to-background border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center space-y-2 py-4 group"
            >
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.color} to-transparent text-transparent bg-clip-text group-hover:scale-110 transition-transform duration-300`}>
                {metric.number}
              </div>
              <div className="text-foreground/60 text-center text-sm md:text-base">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider con gradiente */}
        <div className="mt-8 pt-8 border-t border-primary/10">
          <p className="text-center text-foreground/50 text-sm">
            Impulsamos el crecimiento de empresas con soluciones técnicas innovadoras
          </p>
        </div>
      </div>
    </section>
  )
}
