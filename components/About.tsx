const skills = ['Next.js', 'Tailwind', 'Figma', 'SEO', 'Branding'];
const strengths = ['Réactivité', 'Qualité design', 'Résultats'];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="section-shell grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <article className="glass-card p-7">
          <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">À propos</h2>
          {/* Modifiez ici la présentation personnelle. */}
          <p className="mt-4 text-ink/80">
            Je conçois des interfaces claires et un code propre pour des sites rapides, accessibles et optimisés.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li key={skill} className="rounded-full bg-white/80 px-3 py-1.5 text-sm">
                {skill}
              </li>
            ))}
          </ul>
        </article>
        <article className="glass-card p-7">
          <h3 className="font-[var(--font-heading)] text-xl font-semibold">Mes points forts</h3>
          <ul className="mt-4 space-y-3">
            {strengths.map((strength) => (
              <li key={strength} className="rounded-2xl border border-border bg-white/60 px-4 py-3 text-sm font-medium">
                {strength}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
