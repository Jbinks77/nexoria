import Image from 'next/image';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#creations', label: 'Mes créations' },
  { href: '#offre', label: 'Offre' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#hero" className="inline-flex items-center gap-2">
          <Image src="/assets/logo-nexiora.png" alt="Logo Nexiora" width={148} height={36} className="h-9 w-auto" priority />
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-ink/80 transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-violet/20 bg-violet px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
        >
          Demander un devis
        </a>
      </div>
    </header>
  );
}
