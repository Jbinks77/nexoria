'use client';

import { useMemo, useState } from 'react';

type Category = 'Tous' | 'Vitrine' | 'Jeu vidéo' | 'E-commerce' | 'Entreprise';

type Project = {
  title: string;
  category: Exclude<Category, 'Tous'>;
  tags: string[];
  description: string;
  metric: string;
  coverGradient: string;
};

// Modifiez ce tableau pour remplacer les projets de démo par vos cas clients réels.
const projects: Project[] = [
  {
    title: 'Lueur Studio',
    category: 'Vitrine',
    tags: ['Branding', 'Landing', 'SEO'],
    description: 'Site vitrine minimaliste pour une marque créative avec prise de rendez-vous intégrée.',
    metric: '+42% de demandes',
    coverGradient: 'from-violet/70 via-pink/60 to-sky/70',
  },
  {
    title: 'Nova Quest',
    category: 'Jeu vidéo',
    tags: ['UI', 'Immersion', 'Storytelling'],
    description: 'Site promotionnel d\'un jeu indépendant avec teaser, blog et CTA wishlist.',
    metric: 'x2 temps moyen',
    coverGradient: 'from-sky/70 via-violet/60 to-ink/70',
  },
  {
    title: 'Melo Market',
    category: 'E-commerce',
    tags: ['Shop', 'Conversion', 'Mobile'],
    description: 'Refonte boutique en ligne orientée conversion avec parcours mobile simplifié.',
    metric: '+31% de panier moyen',
    coverGradient: 'from-sunset/70 via-pink/65 to-violet/65',
  },
  {
    title: 'Aster Conseil',
    category: 'Entreprise',
    tags: ['Corporate', 'B2B', 'Performance'],
    description: 'Présence corporate premium avec architecture de contenu pensée pour les leads.',
    metric: 'LCP < 1.8s',
    coverGradient: 'from-sky/70 via-sunset/60 to-pink/65',
  },
];

const filters: Category[] = ['Tous', 'Vitrine', 'Jeu vidéo', 'E-commerce', 'Entreprise'];

export function Creations() {
  const [activeFilter, setActiveFilter] = useState<Category>('Tous');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Tous') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="creations" className="py-20">
      <div className="section-shell">
        <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">Mes créations</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? 'border-violet bg-violet text-white'
                  : 'border-border bg-white/70 text-ink hover:border-violet/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="glass-card overflow-hidden shadow-soft transition duration-300 hover:-translate-y-1 hover:rotate-[0.2deg] hover:shadow-lift"
            >
              <div className={`h-36 bg-gradient-to-br ${project.coverGradient}`} />
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-ink/60">{project.category}</p>
                <h3 className="mt-1 font-[var(--font-heading)] text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-ink/75">{project.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-white/75 px-3 py-1 text-xs text-ink/75">
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-violet">{project.metric}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
