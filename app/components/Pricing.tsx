export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Menos de lo que pagas en un café diario
          </h2>
          <p className="text-muted">
            Un CFO cobra $5M+/mes. Un asesor financiero cobra $200K por consulta.
            FAMA te da análisis con rigor por menos de $1.000/día.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
          {/* Monthly */}
          <div className="rounded-xl border border-border bg-surface/40 p-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">FAMA Pro Mensual</h3>
              <p className="text-sm text-muted">Flexibilidad total, cancela cuando quieras</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-4xl font-bold">$29.900</span>
                <span className="text-muted">/mes</span>
              </div>
              <p className="mt-1 text-xs text-muted">COP &middot; IVA incluido</p>
            </div>
            <ul className="mb-8 space-y-3">
              {[
                "Dashboard ejecutivo completo",
                "Simulador de escenarios ilimitado",
                "Módulo de deudas con optimización",
                "Insights automáticos con IA",
                "Proyección a 12 meses",
                "Soporte por email",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="block rounded-xl border border-border py-3.5 text-center text-sm font-semibold text-text transition-colors hover:border-muted"
            >
              Empieza 7 días gratis
            </a>
          </div>

          {/* Annual */}
          <div className="relative rounded-xl border-2 border-primary bg-surface/40 p-8">
            <div className="absolute -top-3 right-6 rounded-full bg-primary px-4 py-1 text-xs font-bold text-background">
              2 MESES GRATIS
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold">FAMA Pro Anual</h3>
              <p className="text-sm text-muted">Mejor precio, compromiso con tus finanzas</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-4xl font-bold text-primary">$299.000</span>
                <span className="text-muted">/año</span>
              </div>
              <p className="mt-1 text-xs text-muted">
                COP &middot; IVA incluido &middot;{" "}
                <span className="text-primary">Equivale a $24.917/mes</span>
              </p>
            </div>
            <ul className="mb-8 space-y-3">
              {[
                "Todo lo del plan mensual",
                "Dashboard ejecutivo completo",
                "Simulador de escenarios ilimitado",
                "Módulo de deudas con optimización",
                "Insights automáticos con IA",
                "Soporte prioritario",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="block rounded-xl bg-primary py-3.5 text-center text-sm font-bold text-background transition-colors hover:bg-primary-dark"
            >
              Empieza 7 días gratis
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted">
            7 días de prueba gratis en ambos planes &middot; Sin tarjeta de crédito &middot; Cancela cuando quieras
          </p>
        </div>
      </div>
    </section>
  );
}
