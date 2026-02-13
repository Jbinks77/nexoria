const steps = ['Brief', 'Design', 'Développement', 'Mise en ligne'];

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-24">
      <div className="section-shell">
        <h2 className="section-title">Process</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step} className="glass-card p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/55">Étape {index + 1}</span>
              <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-bold tracking-tight">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
