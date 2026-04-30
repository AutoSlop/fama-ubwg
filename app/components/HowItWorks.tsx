export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Conecta tu realidad financiera",
      desc: "Onboarding guiado de 5 pasos. Ingresa ingresos, gastos, deudas y activos. En 5 minutos tienes tu radiografía: liquidez, DTI y margen.",
      detail: "Sin conexión bancaria. Tú controlas tus datos.",
    },
    {
      number: "02",
      title: "Simula antes de decidir",
      desc: "¿Comprar carro? ¿Quedar sin trabajo? ¿Pagar extra la tarjeta? Simula cualquier escenario y ve el impacto mes a mes en tus KPIs.",
      detail: "Proyección a 12 meses con métricas reales.",
    },
    {
      number: "03",
      title: "Actúa con datos, no intuición",
      desc: "Dashboard ejecutivo con KPIs, alertas automáticas de liquidez y DTI, estrategia de deudas optimizada y resumen accionable cada semana.",
      detail: "Insights automáticos que un CFO te daría.",
    },
  ];

  return (
    <section id="como-funciona" className="border-t border-border bg-surface/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Cómo funciona
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            De cero a tu primer análisis en 5 minutos
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="rounded-xl border border-border bg-background p-8">
                <span className="mb-4 block font-mono text-4xl font-bold text-primary/30">
                  {step.number}
                </span>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">{step.desc}</p>
                <p className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
