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
    <section id="services" className="py-20">
      <div className="section-shell">
        <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">Services</h2>
        <p className="mt-3 max-w-2xl text-ink/75">Des offres claires, pensées pour particuliers, créateurs et entreprises.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="glass-card p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-[var(--font-heading)] text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{service.desc}</p>
            </article>
          ))}
        </div>
        <aside className="glass-card mt-8 p-6">
          <h3 className="font-[var(--font-heading)] text-lg font-semibold">Inclus dans chaque projet</h3>
          <ul className="mt-4 grid gap-2 text-sm text-ink/80 sm:grid-cols-2">
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
