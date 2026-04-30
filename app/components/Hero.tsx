export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Análisis financiero personal con rigor
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            El CFO personal que{" "}
            <span className="bg-gradient-to-r from-primary to-[#00F5B8] bg-clip-text text-transparent">
              no puedes contratar
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Simula decisiones reales sobre tu dinero en Colombia y ve su impacto mes a mes en{" "}
            <span className="text-text">liquidez</span>,{" "}
            <span className="text-text">deuda</span>,{" "}
            <span className="text-text">margen</span> y{" "}
            <span className="text-text">patrimonio</span>.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="animate-pulse-glow w-full rounded-xl bg-primary px-8 py-4 text-base font-semibold text-background transition-all hover:bg-primary-dark sm:w-auto"
            >
              Empieza tu prueba gratis de 7 días
            </a>
            <a
              href="#como-funciona"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-medium text-muted transition-colors hover:border-muted hover:text-text sm:w-auto"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <polygon points="5,3 19,12 5,21" fill="currentColor" stroke="none" />
              </svg>
              Ver cómo funciona
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            Sin tarjeta de crédito &middot; Cancela cuando quieras &middot; Setup en 5 min
          </p>
        </div>

        {/* KPI Preview Cards */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            { label: "Liquidez", value: "4.2", unit: "meses", color: "text-primary" },
            { label: "DTI", value: "31", unit: "%", color: "text-amber" },
            { label: "Margen", value: "$1.250.000", unit: "/mes", color: "text-primary" },
            { label: "Patrimonio", value: "+$18.4M", unit: "neto", color: "text-primary" },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-border bg-surface/60 p-4 text-center backdrop-blur sm:p-6"
            >
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                {kpi.label}
              </p>
              <p className={`font-mono text-2xl font-medium sm:text-3xl ${kpi.color}`}>
                {kpi.value}
              </p>
              <p className="text-xs text-muted">{kpi.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
