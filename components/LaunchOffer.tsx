const offers = [
  {
    title: 'SITE VITRINE',
    oldPrice: '1000€',
    newPrice: '500€',
    remaining: '3 projets restants',
    items: ['Design personnalisé', 'Responsive', 'SEO de base', 'Mise en ligne'],
  },
  {
    title: 'E-COMMERCE',
    oldPrice: '1400€',
    newPrice: '700€',
    remaining: '5 projets restants',
    items: ['Design boutique', 'Paiement sécurisé', 'Gestion produits', 'SEO de base'],
  },
  {
    title: 'ENTREPRISE PREMIUM',
    oldPrice: '2500€',
    newPrice: '1250€',
    remaining: '2 projets restants',
    items: ['Design sur-mesure', 'UX optimisée', 'Performance avancée', 'SEO + optimisation'],
  },
];

export function LaunchOffer() {
  return (
    <section id="offre" className="py-20">
      <div className="section-shell">
        <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">Offre de lancement 2026</h2>
        <p className="mt-3 text-ink/75">Tarifs réduits pour les prochains projets sélectionnés.</p>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.title} className="glass-card p-6 shadow-soft">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-[var(--font-heading)] text-lg font-semibold">{offer.title}</h3>
                <span className="rounded-full bg-pink/25 px-2.5 py-1 text-xs font-semibold text-ink">-50%</span>
              </div>
              <p className="mt-4 text-sm text-ink/60 line-through">{offer.oldPrice}</p>
              <p className="text-3xl font-bold text-violet">{offer.newPrice}</p>
              <p className="mt-1 text-sm font-medium text-ink/70">{offer.remaining}</p>
              <ul className="mt-5 space-y-2 text-sm text-ink/80">
                {offer.items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex rounded-full border border-violet/20 bg-violet px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Réserver mon projet
              </a>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs text-ink/60">Offre valable pour les prochains projets signés. Acompte requis.</p>
      </div>
    </section>
  );
}
