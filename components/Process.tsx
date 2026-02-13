const steps = ['Brief', 'Design', 'Développement', 'Mise en ligne'];

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="section-shell">
        <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">Process</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step} className="glass-card relative p-5">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink/60">Étape {index + 1}</span>
              <h3 className="mt-2 font-[var(--font-heading)] text-xl font-semibold">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
