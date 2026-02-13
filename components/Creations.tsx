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

const projects: Project[] = [
  {
    title: 'Lueur Studio',
    category: 'Vitrine',
    tags: ['Branding', 'Landing', 'SEO'],
    description: 'Site vitrine minimaliste pour une marque créative avec prise de rendez-vous intégrée.',
    metric: '+42% de demandes',
    coverGradient: 'from-[#6f5cff] via-[#9d8fff] to-[#b4efff]',
  },
  {
    title: 'Nova Quest',
    category: 'Jeu vidéo',
    tags: ['UI', 'Immersion', 'Storytelling'],
    description: 'Site promotionnel d\'un jeu indépendant avec teaser, blog et CTA wishlist.',
    metric: 'x2 temps moyen',
    coverGradient: 'from-[#2f355f] via-[#6e5dff] to-[#91dcff]',
  },
  {
    title: 'Melo Market',
    category: 'E-commerce',
    tags: ['Shop', 'Conversion', 'Mobile'],
    description: 'Refonte boutique en ligne orientée conversion avec parcours mobile simplifié.',
    metric: '+31% de panier moyen',
    coverGradient: 'from-[#ff9f73] via-[#ff9ad5] to-[#8e7cff]',
  },
  {
    title: 'Aster Conseil',
    category: 'Entreprise',
    tags: ['Corporate', 'B2B', 'Performance'],
    description: 'Présence corporate premium avec architecture de contenu pensée pour les leads.',
    metric: 'LCP < 1.8s',
    coverGradient: 'from-[#7fd6ff] via-[#ffa86b] to-[#f8a3ce]',
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
    <section id="creations" className="py-20 lg:py-24">
      <div className="section-shell">
        <h2 className="section-title">Mes créations</h2>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition duration-300 ${
                activeFilter === filter
                  ? 'border-transparent bg-gradient-to-r from-violet to-[#7462ff] text-white shadow-[0_10px_24px_rgba(142,124,255,0.4)]'
                  : 'border-border/70 bg-white/80 text-ink/80 hover:-translate-y-0.5 hover:border-violet/35 hover:bg-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="glass-card overflow-hidden shadow-[0_18px_38px_rgba(27,27,31,0.1)] transition duration-300 hover:-translate-y-1.5 hover:rotate-[0.2deg] hover:shadow-[0_24px_56px_rgba(27,27,31,0.16)]"
            >
              <div className={`h-44 bg-gradient-to-br ${project.coverGradient}`} />
              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">{project.category}</p>
                <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-bold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-ink/75">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink/75">
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-semibold text-violet">{project.metric}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
