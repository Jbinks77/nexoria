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
      <div className="absolute inset-0 bg-gradient-to-b from-[#120d25]/50 via-[#25163f]/30 to-bg" />

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
        className="cloud absolute right-[9%] top-[22%] scale-[0.85] opacity-65 blur-[2px]"
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

      <div className="section-shell relative flex min-h-[100svh] items-end pb-16 pt-36 sm:items-center sm:pb-20">
        <div className="max-w-3xl rounded-[2rem] border border-white/25 bg-black/30 p-7 text-white backdrop-blur-xl sm:p-11">
          <h1 className="font-[var(--font-heading)] text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Des sites beaux, rapides et pensés pour convertir.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            Web design • Développement • Identité visuelle
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#creations"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-[0_12px_28px_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5"
            >
              Voir mes créations
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Demander un devis
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {badges.map((item) => (
              <li key={item} className="rounded-full border border-white/35 bg-white/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
