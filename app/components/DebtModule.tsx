export default function DebtModule() {
  const debts = [
    { name: "Tarjeta Visa", balance: "$8.200.000", rate: "28.5%", min: "$410.000", priority: 1 },
    { name: "Crédito libre inversión", balance: "$22.000.000", rate: "19.2%", min: "$680.000", priority: 2 },
    { name: "Crédito carro", balance: "$35.000.000", rate: "14.8%", min: "$890.000", priority: 3 },
  ];

  return (
    <section id="deudas" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Módulo de deudas
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Paga tus deudas con estrategia, no con angustia
            </h2>
            <p className="mb-6 text-muted">
              FAMA analiza todas tus deudas, calcula la prioridad óptima de pago y te muestra
              cuánto ahorras con cada estrategia.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">Avalancha</p>
                <p className="mt-1 font-mono text-xl font-medium text-primary">$4.2M</p>
                <p className="text-xs text-muted">ahorro en intereses</p>
              </div>
              <div className="rounded-xl border border-border bg-surface/50 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">Bola de nieve</p>
                <p className="mt-1 font-mono text-xl font-medium text-amber">$3.1M</p>
                <p className="text-xs text-muted">ahorro en intereses</p>
              </div>
            </div>

            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm text-muted">
                <span className="font-semibold text-primary">Recomendación FAMA:</span>{" "}
                Con método avalancha sales de deuda <span className="font-semibold text-text">8 meses antes</span> y
                ahorras <span className="font-mono font-semibold text-primary">$1.1M</span> más en intereses.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface/40 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Tus deudas
              </h3>
              <span className="font-mono text-xs text-muted">Prioridad avalancha</span>
            </div>
            <div className="space-y-3">
              {debts.map((debt) => (
                <div
                  key={debt.name}
                  className="rounded-lg border border-border bg-background p-4"
                >
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 font-mono text-xs font-semibold text-primary">
                          {debt.priority}
                        </span>
                        <span className="text-sm font-medium">{debt.name}</span>
                      </div>
                    </div>
                    <span className="font-mono text-sm font-medium text-red">{debt.rate} EA</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>
                      Saldo: <span className="font-mono text-text">{debt.balance}</span>
                    </span>
                    <span>
                      Cuota mín: <span className="font-mono text-text">{debt.min}</span>
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                      style={{ width: `${100 - debt.priority * 25}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-muted">
              Fecha libre de deuda estimada: <span className="font-mono font-semibold text-primary">Mar 2028</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
