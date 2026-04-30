export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Llevaba 3 años con un Excel que supuestamente me daba control de mis finanzas. FAMA me mostró en 5 minutos que mi DTI estaba en 42% y que mi 'colchón' solo cubría 1.8 meses. Ahora tomo decisiones con datos reales.",
      name: "Carolina M.",
      role: "Gerente de Proyectos, Empresa de Tecnología",
      city: "Bogotá",
      metric: "DTI de 42% → 29% en 6 meses",
    },
    {
      quote:
        "Iba a comprar un carro financiado a 72 meses. El simulador de FAMA me mostró que mi liquidez caía de 5 a 1.3 meses. Decidí esperar, ahorrar cuota inicial y financiar a 48 meses. Me ahorré $8M en intereses.",
      name: "Andrés R.",
      role: "Director Comercial, Multinacional",
      city: "Medellín",
      metric: "$8M ahorrados en intereses",
    },
    {
      quote:
        "Como independiente, mis ingresos varían cada mes. FAMA me dio visibilidad de mi margen real y me alertó cuando mi liquidez bajó de 3 meses. Eso me salvó cuando un cliente grande se retrasó en pagos.",
      name: "Valentina P.",
      role: "Consultora Senior, Freelance",
      city: "Cali",
      metric: "Liquidez de 2.1 → 6.4 meses",
    },
    {
      quote:
        "El módulo de deudas me organizó todo. Tenía 4 créditos y no sabía cuál pagar primero. Con la estrategia avalancha voy a salir de deuda 11 meses antes de lo que tenía proyectado.",
      name: "Santiago L.",
      role: "Ingeniero de Software, Startup",
      city: "Bogotá",
      metric: "Libre de deuda 11 meses antes",
    },
  ];

  return (
    <section id="testimonios" className="border-t border-border bg-surface/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonios
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Profesionales colombianos que ya toman decisiones con datos
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-background p-6 sm:p-8"
            >
              <p className="mb-6 text-sm leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.role} &middot; {t.city}
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
                <p className="font-mono text-xs font-medium text-primary">{t.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
