const services = [
  {
    title: 'Site vitrine',
    desc: 'Une présence élégante et convaincante pour présenter votre activité et générer des demandes qualifiées.',
  },
  {
    title: 'E-commerce',
    desc: 'Une boutique performante avec parcours d\'achat fluide, rassurant et orienté conversion.',
  },
  {
    title: 'Branding & UI',
    desc: 'Une identité visuelle cohérente et des interfaces premium qui renforcent votre image de marque.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-24">
      <div className="section-shell">
        <h2 className="section-title">Services</h2>
        <p className="section-copy">Des offres claires, pensées pour particuliers, créateurs et entreprises.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className="glass-card p-8 shadow-[0_16px_36px_rgba(27,27,31,0.09)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_52px_rgba(27,27,31,0.14)]"
            >
              <div
                className={`mb-5 h-1.5 w-14 rounded-full ${
                  idx === 0 ? 'bg-gradient-to-r from-violet to-sky' : idx === 1 ? 'bg-gradient-to-r from-sunset to-pink' : 'bg-gradient-to-r from-sky to-violet'
                }`}
              />
              <h3 className="font-[var(--font-heading)] text-2xl font-bold tracking-tight">{service.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-ink/75">{service.desc}</p>
            </article>
          ))}
        </div>

        <aside className="glass-card mt-10 bg-white/75 p-8">
          <h3 className="font-[var(--font-heading)] text-2xl font-semibold">Inclus dans chaque projet</h3>
          <ul className="mt-5 grid gap-3 text-sm text-ink/80 sm:grid-cols-2">
            <li>✓ Responsive</li>
            <li>✓ SEO de base</li>
            <li>✓ Performance</li>
            <li>✓ Accessibilité</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
