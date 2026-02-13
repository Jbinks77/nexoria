import Image from 'next/image';

const badges = ['Design', 'SEO', 'Responsive', 'Performance'];

export function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src="/assets/hero-illustration.png"
        alt="Illustration colorée de travail créatif web"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-bg" />

      {/* Modifiez ici le positionnement/quantité des nuages si vous changez l'illustration hero. */}
      <Image
        src="/assets/cloud-1.png"
        alt=""
        aria-hidden
        width={250}
        height={120}
        className="cloud absolute left-[6%] top-[18%] opacity-70"
        style={{ animationName: 'float', animationDuration: '22s', animationDelay: '-3s' }}
      />
      <Image
        src="/assets/cloud-1.png"
        alt=""
        aria-hidden
        width={230}
        height={110}
        className="cloud absolute right-[9%] top-[22%] scale-[0.85] opacity-60 blur-[2px]"
        style={{ animationName: 'float', animationDuration: '30s', animationDelay: '-6s' }}
      />
      <Image
        src="/assets/cloud-1.png"
        alt=""
        aria-hidden
        width={280}
        height={130}
        className="cloud absolute bottom-[24%] left-[18%] opacity-80"
        style={{ animationName: 'float', animationDuration: '38s', animationDelay: '-9s' }}
      />

      <div className="section-shell relative flex min-h-[100svh] items-end pb-16 pt-28 sm:items-center sm:pb-20">
        <div className="max-w-3xl rounded-3xl border border-white/20 bg-black/20 p-6 text-white backdrop-blur-md sm:p-10">
          {/* Modifiez ici le message principal. */}
          <h1 className="font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Des sites beaux, rapides et pensés pour convertir.
          </h1>
          <p className="mt-4 text-base text-white/90 sm:text-lg">
            Web design • Développement • Identité visuelle
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#creations" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5">
              Voir mes créations
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Demander un devis
            </a>
          </div>
          <ul className="mt-7 flex flex-wrap gap-2">
            {badges.map((item) => (
              <li key={item} className="rounded-full border border-white/35 bg-white/20 px-3 py-1.5 text-xs font-medium uppercase tracking-wide">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
