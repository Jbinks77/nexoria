const skills = ['Next.js', 'Tailwind', 'Figma', 'SEO', 'Branding'];
const strengths = ['Réactivité', 'Qualité design', 'Résultats'];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="section-shell grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <article className="glass-card p-8 lg:p-10">
          <h2 className="section-title">À propos</h2>
          <p className="section-copy max-w-xl">
            Je conçois des interfaces claires et un code propre pour des sites rapides, accessibles et optimisés.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <li key={skill} className="rounded-full bg-white/90 px-3.5 py-1.5 text-sm font-medium">
                {skill}
              </li>
            ))}
          </ul>
        </article>
        <article className="glass-card p-8 lg:p-10">
          <h3 className="font-[var(--font-heading)] text-2xl font-bold tracking-tight">Mes points forts</h3>
          <ul className="mt-5 space-y-3.5">
            {strengths.map((strength) => (
              <li key={strength} className="rounded-2xl border border-[rgba(27,27,31,0.12)] bg-white/70 px-4 py-3 text-sm font-medium">
                {strength}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
