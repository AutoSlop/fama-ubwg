export default function FinalCTA() {
  return (
    <section className="border-t border-border bg-surface/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-8 text-center sm:p-16">
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

          <h2 className="relative mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Deja de adivinar.{" "}
            <span className="bg-gradient-to-r from-primary to-[#00F5B8] bg-clip-text text-transparent">
              Empieza a decidir.
            </span>
          </h2>
          <p className="relative mx-auto mb-8 max-w-xl text-lg text-muted">
            7 días gratis para ver tu radiografía financiera completa. Sin tarjeta de crédito.
            Sin compromiso. Solo datos.
          </p>
          <div className="relative flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#pricing"
              className="w-full rounded-xl bg-primary px-8 py-4 text-base font-bold text-background transition-colors hover:bg-primary-dark sm:w-auto"
            >
              Empieza tu prueba gratis de 7 días
            </a>
            <a
              href="#como-funciona"
              className="w-full rounded-xl border border-border px-8 py-4 text-base font-medium text-muted transition-colors hover:border-muted hover:text-text sm:w-auto"
            >
              Ver cómo funciona
            </a>
          </div>
          <p className="relative mt-6 text-sm text-muted">
            Más de 2.000 profesionales colombianos ya usan FAMA
          </p>
        </div>
      </div>
    </section>
  );
}
