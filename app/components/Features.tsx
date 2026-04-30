export default function Features() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Onboarding en 5 pasos",
      desc: "Ingresa tu información financiera de forma guiada. Sin jerga, sin complicaciones. Al final: radiografía inmediata con liquidez en meses, DTI y margen operativo.",
      tag: "5 min setup",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Dashboard ejecutivo",
      desc: "KPIs financieros en tiempo real, proyección a 12 meses y resumen accionable. Todo lo que necesitas para entender tu situación de un vistazo.",
      tag: "Vista 360°",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Simulador de escenarios",
      desc: "Modela decisiones antes de tomarlas. Ve el impacto en liquidez, deuda y patrimonio mes a mes. Compara escenarios y toma la mejor decisión.",
      tag: "What-if analysis",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Módulo de deudas",
      desc: "Prioridad de pago optimizada. Compara estrategia avalancha vs. bola de nieve. Ve cuánto ahorras en intereses y cuándo quedas libre de deuda.",
      tag: "Avalancha vs Bola de nieve",
    },
    {
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: "Insights automáticos",
      desc: "Alertas inteligentes de liquidez baja, DTI alto y oportunidades de ahorro. FAMA analiza tu data y te dice qué hacer, como lo haría un CFO.",
      tag: "Alertas con IA",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Producto
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Todo lo que necesitas para manejar tu dinero como un ejecutivo
          </h2>
          <p className="text-muted">
            5 módulos diseñados para profesionales que quieren datos, no consejos genéricos.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group rounded-xl border border-border bg-surface/40 p-6 transition-all hover:border-primary/30 hover:bg-surface/80 ${
                i >= 3 ? "lg:col-span-1" : ""
              } ${i === 3 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary transition-colors group-hover:border-primary/30">
                {feature.icon}
              </div>
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">{feature.desc}</p>
              <span className="inline-block rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-primary">
                {feature.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
