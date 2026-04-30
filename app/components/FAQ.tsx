"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Mis datos financieros están seguros?",
    a: "Absolutamente. FAMA no se conecta a tus bancos. Tú ingresas la información manualmente y todos los datos se procesan de forma encriptada. No compartimos, vendemos ni accedemos a tu información bancaria.",
  },
  {
    q: "¿Cómo calcula FAMA mis métricas?",
    a: "Usamos modelos financieros estándar de análisis corporativo adaptados a finanzas personales. Liquidez se calcula como activos líquidos / gastos mensuales. DTI como total obligaciones / ingreso bruto. Margen como ingreso neto - gastos - deudas. Todo en COP y con contexto colombiano.",
  },
  {
    q: "¿Qué papel juega la IA en FAMA?",
    a: "La IA analiza tus patrones financieros para generar insights accionables: identifica riesgos de liquidez, oportunidades de ahorro en deudas y proyecta escenarios. No toma decisiones por ti — te da la información para que tú decidas con datos.",
  },
  {
    q: "¿Para quién es FAMA?",
    a: "Para profesionales en Colombia con ingresos estables o variables que quieren análisis financiero serio. Si ganas más de $3M/mes, tienes deudas, ahorros o estás considerando decisiones financieras importantes, FAMA es para ti. No es para principiantes que buscan tips de ahorro.",
  },
  {
    q: "¿Por qué no es una app de presupuesto?",
    a: "Las apps de presupuesto te dicen cuánto gastaste en café. FAMA te dice si puedes comprar un carro sin poner en riesgo tu liquidez. Es análisis financiero con proyección, simulación y estrategia de deuda — como tener un CFO, no un contador de gastos.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. Sin penalidades, sin preguntas, sin retención. Cancelas desde tu cuenta y listo. Si estás en prueba gratis y cancelas antes de 7 días, no se te cobra nada.",
  },
  {
    q: "¿Funciona para independientes y freelancers?",
    a: "Sí. FAMA está diseñado para manejar ingresos variables. Puedes ingresar múltiples fuentes de ingreso con diferentes frecuencias y el sistema ajusta tus métricas y proyecciones acordemente.",
  },
  {
    q: "¿Las métricas están en pesos colombianos?",
    a: "Sí. Todo está en COP. Liquidez en meses, DTI en porcentaje, margen y patrimonio en pesos colombianos. Diseñado para el contexto financiero de Colombia, incluyendo conceptos como cesantías, prima y retención en la fuente.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="pr-4 text-sm font-medium sm:text-base">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-muted transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-relaxed text-muted">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
