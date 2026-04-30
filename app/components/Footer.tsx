export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-background">F</span>
              </div>
              <span className="text-lg font-bold tracking-tight">FAMA</span>
            </div>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-muted">
              Tu CFO personal con IA. Análisis financiero con rigor para profesionales en Colombia.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <span
                  key={social}
                  className="text-xs text-muted transition-colors hover:text-text cursor-pointer"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Producto
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Dashboard", href: "#features" },
                { label: "Simulador", href: "#simulador" },
                { label: "Módulo de deudas", href: "#deudas" },
                { label: "Insights", href: "#features" },
                { label: "Pricing", href: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Recursos
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Cómo funciona", href: "#como-funciona" },
                { label: "FAQ", href: "#faq" },
                { label: "Blog", href: "#" },
                { label: "Guía de inicio", href: "#" },
                { label: "Contacto", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                "Términos de servicio",
                "Política de privacidad",
                "Política de cookies",
                "Tratamiento de datos",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted transition-colors hover:text-text">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} FAMA. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted">
            Hecho con rigor en Colombia 🇨🇴
          </p>
        </div>

        {/* Final micro-CTA */}
        <div className="mt-8 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-2.5 text-sm font-medium text-muted transition-all hover:border-primary hover:text-primary"
          >
            Empieza gratis hoy
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
