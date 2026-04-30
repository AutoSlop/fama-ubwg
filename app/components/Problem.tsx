export default function Problem() {
  return (
    <section id="problema" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Tomas decisiones de{" "}
            <span className="text-red">millones de pesos</span>{" "}
            con una hoja de Excel y el instinto
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-muted">
            Eres un profesional que gana bien, pero no tienes visibilidad real de tu situación
            financiera. Sabes que deberías analizar mejor, pero no tienes las herramientas ni el
            tiempo para hacerlo con rigor.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "📊",
              title: "Excel no escala",
              desc: "Tu hoja de cálculo no simula escenarios, no te alerta y se rompe cada vez que cambias algo.",
            },
            {
              icon: "🎯",
              title: "Decisiones a ciegas",
              desc: "¿Comprar carro? ¿Cambiar de trabajo? ¿Pagar deuda extra? Decides sin ver el impacto real.",
            },
            {
              icon: "⏰",
              title: "No tienes tiempo",
              desc: "Un CFO cobra $5M+/mes. Un asesor financiero te vende productos. Necesitas análisis, no ventas.",
            },
            {
              icon: "📉",
              title: "No sabes tu DTI real",
              desc: "Debt-to-income, liquidez en meses, margen operativo personal... métricas que deberías monitorear.",
            },
            {
              icon: "🔮",
              title: "Sin proyección",
              desc: "No ves cómo se ve tu patrimonio en 12 meses si sigues como vas. Ni qué pasa si algo cambia.",
            },
            {
              icon: "🇨🇴",
              title: "Nada para Colombia",
              desc: "Las apps gringas no entienden cesantías, prima, retención en la fuente ni créditos de libranza.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-surface/50 p-6 transition-colors hover:border-border/80"
            >
              <span className="mb-3 block text-2xl">{item.icon}</span>
              <h3 className="mb-2 text-base font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center sm:p-8">
          <p className="text-lg font-semibold text-text sm:text-xl">
            No es app de presupuesto. No es educación financiera.
          </p>
          <p className="mt-2 text-lg font-bold text-primary sm:text-xl">
            Es análisis financiero personal con rigor.
          </p>
        </div>
      </div>
    </section>
  );
}
