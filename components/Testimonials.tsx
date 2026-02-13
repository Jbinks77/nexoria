const testimonials = [
  {
    name: 'Camille D.',
    role: 'Artisan créatrice',
    text: 'Site livré rapidement, très beau rendu et des retours clients excellents dès la première semaine.',
  },
  {
    name: 'Nolan P.',
    role: 'Fondateur e-shop',
    text: 'Design premium, tunnel d\'achat plus fluide et vrai gain de conversion.',
  },
  {
    name: 'Sonia R.',
    role: 'Consultante B2B',
    text: 'Super accompagnement, code propre et excellente pédagogie durant tout le projet.',
  },
];

export function Testimonials() {
  return (
    <section className="py-20" aria-label="Témoignages clients">
      <div className="section-shell">
        <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">Témoignages</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="glass-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-content-center rounded-full bg-gradient-to-br from-violet/35 to-pink/35 text-sm font-bold">
                  {item.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-ink/60">{item.role}</p>
                </div>
              </div>
              <p className="mt-4 text-amber-500">★★★★★</p>
              <p className="mt-3 text-sm text-ink/80">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
