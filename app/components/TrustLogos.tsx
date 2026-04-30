export default function TrustLogos() {
  const logos = [
    "Bancolombia",
    "Rappi",
    "Nubank",
    "Grupo Éxito",
    "Globant",
    "MercadoLibre",
  ];

  return (
    <section className="border-y border-border bg-surface/30 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted">
          Profesionales de estas empresas ya confían en FAMA
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {logos.map((name) => (
            <span
              key={name}
              className="font-mono text-sm font-medium tracking-wide text-muted/50 transition-colors hover:text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
