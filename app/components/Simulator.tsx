"use client";

import { useState } from "react";

const scenarios = [
  {
    id: "carro",
    emoji: "🚗",
    title: "Comprar carro $60M a 60 meses",
    impact: {
      liquidez: { before: "4.2", after: "2.1", unit: "meses", change: "-50%", negative: true },
      dti: { before: "31%", after: "48%", unit: "", change: "+17pp", negative: true },
      margen: { before: "$1.250.000", after: "$420.000", unit: "/mes", change: "-66%", negative: true },
      patrimonio12m: { before: "+$18.4M", after: "+$5.2M", unit: "", change: "-72%", negative: true },
    },
    verdict: "Alto riesgo. Tu DTI supera el 40% recomendado. Considera un carro de menor valor o mayor cuota inicial.",
    verdictColor: "text-red",
  },
  {
    id: "desempleo",
    emoji: "⚠️",
    title: "Quedar sin trabajo 4 meses",
    impact: {
      liquidez: { before: "4.2", after: "0.8", unit: "meses", change: "-81%", negative: true },
      dti: { before: "31%", after: "100%+", unit: "", change: "Crítico", negative: true },
      margen: { before: "$1.250.000", after: "-$2.800.000", unit: "/mes", change: "Déficit", negative: true },
      patrimonio12m: { before: "+$18.4M", after: "+$4.1M", unit: "", change: "-78%", negative: true },
    },
    verdict: "Necesitas mínimo 6 meses de colchón. Hoy tienes 4.2. Prioriza fondo de emergencia antes de cualquier compra.",
    verdictColor: "text-red",
  },
  {
    id: "aumento",
    emoji: "📈",
    title: "Subir ingresos 15%",
    impact: {
      liquidez: { before: "4.2", after: "5.8", unit: "meses", change: "+38%", negative: false },
      dti: { before: "31%", after: "27%", unit: "", change: "-4pp", negative: false },
      margen: { before: "$1.250.000", after: "$2.100.000", unit: "/mes", change: "+68%", negative: false },
      patrimonio12m: { before: "+$18.4M", after: "+$28.6M", unit: "", change: "+55%", negative: false },
    },
    verdict: "Excelente impacto. Destina el 70% del incremento a deuda y ahorro para maximizar el efecto compuesto.",
    verdictColor: "text-primary",
  },
  {
    id: "tarjeta",
    emoji: "💳",
    title: "Pagar doble tarjeta este mes",
    impact: {
      liquidez: { before: "4.2", after: "3.6", unit: "meses", change: "-14%", negative: true },
      dti: { before: "31%", after: "28%", unit: "", change: "-3pp", negative: false },
      margen: { before: "$1.250.000", after: "$1.250.000", unit: "/mes", change: "Igual", negative: false },
      patrimonio12m: { before: "+$18.4M", after: "+$21.2M", unit: "", change: "+15%", negative: false },
    },
    verdict: "Buen movimiento. Reduces intereses y liberas capacidad. Impacto positivo neto en patrimonio a 12 meses.",
    verdictColor: "text-primary",
  },
];

export default function Simulator() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];

  return (
    <section id="simulador" className="border-t border-border bg-surface/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Simulador
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Simula antes de decidir
          </h2>
          <p className="text-muted">
            Selecciona un escenario y ve cómo impacta tus métricas financieras en tiempo real.
          </p>
        </div>

        {/* Scenario selector */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {scenarios.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`rounded-xl border p-4 text-left transition-all ${
                active === i
                  ? "border-primary bg-primary/10"
                  : "border-border bg-surface/50 hover:border-border/80"
              }`}
            >
              <span className="mb-2 block text-2xl">{s.emoji}</span>
              <span className="block text-sm font-medium leading-tight">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Impact display */}
        <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl">{scenario.emoji}</span>
            <h3 className="text-lg font-semibold">{scenario.title}</h3>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {Object.entries(scenario.impact).map(([key, data]) => {
              const labels: Record<string, string> = {
                liquidez: "Liquidez",
                dti: "DTI",
                margen: "Margen",
                patrimonio12m: "Patrimonio 12m",
              };
              return (
                <div key={key} className="rounded-lg border border-border bg-surface/50 p-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                    {labels[key]}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-sm text-muted line-through">{data.before}{data.unit}</span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-mono text-xl font-medium text-text">
                      {data.after}
                    </span>
                    <span className="text-xs text-muted">{data.unit}</span>
                  </div>
                  <span
                    className={`mt-1 inline-block font-mono text-xs font-medium ${
                      data.negative ? "text-red" : "text-primary"
                    }`}
                  >
                    {data.change}
                  </span>
                </div>
              );
            })}
          </div>

          <div className={`rounded-lg border border-border bg-surface/30 p-4 ${scenario.verdictColor}`}>
            <p className="text-sm font-medium">
              <span className="mr-2 font-semibold">Veredicto FAMA:</span>
              {scenario.verdict}
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted">
          En FAMA puedes crear escenarios personalizados con tus números reales.
        </p>
      </div>
    </section>
  );
}
