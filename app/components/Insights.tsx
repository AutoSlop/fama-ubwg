export default function Insights() {
  const insights = [
    {
      type: "alerta",
      color: "border-red/30 bg-red/5",
      iconColor: "text-red",
      icon: "⚠️",
      title: "Liquidez por debajo de 3 meses",
      desc: "Tu colchón de emergencia cubre solo 2.8 meses de gastos. Recomendamos llegar a 6 meses antes de nuevas obligaciones.",
      action: "Ver plan de acción →",
    },
    {
      type: "alerta",
      color: "border-amber/30 bg-amber/5",
      iconColor: "text-amber",
      icon: "📊",
      title: "DTI acercándose al límite",
      desc: "Tu ratio deuda/ingreso está en 38%. Por encima de 40% los bancos restringen crédito y tu flexibilidad financiera se reduce.",
      action: "Ver simulación →",
    },
    {
      type: "oportunidad",
      color: "border-primary/30 bg-primary/5",
      iconColor: "text-primary",
      icon: "💡",
      title: "Oportunidad: pago extra tarjeta",
      desc: "Si pagas $500.000 extra este mes a tu tarjeta Visa (28.5% EA), ahorras $180.000 en intereses y reduces 2 meses tu calendario de deuda.",
      action: "Simular escenario →",
    },
    {
      type: "oportunidad",
      color: "border-primary/30 bg-primary/5",
      iconColor: "text-primary",
      icon: "🎯",
      title: "Meta de patrimonio alcanzable",
      desc: "Manteniendo tu ritmo actual de ahorro, llegas a $100M en patrimonio neto en 14 meses. Si subes ahorro 10%, llegas en 11 meses.",
      action: "Ver proyección →",
    },
  ];

  return (
    <section className="border-t border-border bg-surface/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Insights automáticos
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Tu CFO personal te dice qué hacer
          </h2>
          <p className="text-muted">
            FAMA analiza tu situación continuamente y genera alertas y oportunidades accionables.
            Como tener un director financiero que trabaja 24/7.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {insights.map((insight, i) => (
            <div
              key={i}
              className={`rounded-xl border p-6 transition-all hover:scale-[1.01] ${insight.color}`}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-lg">{insight.icon}</span>
                <span className={`text-xs font-semibold uppercase tracking-wider ${insight.iconColor}`}>
                  {insight.type}
                </span>
              </div>
              <h3 className="mb-2 text-base font-semibold text-text">{insight.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted">{insight.desc}</p>
              <span className="text-sm font-medium text-primary">{insight.action}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
