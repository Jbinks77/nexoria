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
    <header className="sticky top-0 z-50 border-b border-[rgba(27,27,31,0.12)] bg-bg/70 backdrop-blur-2xl">
      <div className="section-shell flex h-24 items-center justify-between gap-4 md:h-28">
        <a href="#hero" className="inline-flex items-center gap-2 transition duration-300 hover:scale-105">
          <Image
            src="/assets/logo-nexiora.png"
            alt="Logo Nexiora"
            width={224}
            height={56}
            className="h-10 w-auto sm:h-12 md:h-14"
            priority
          />
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 text-[15px] font-medium md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-ink/75 transition hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-violet/20 bg-gradient-to-r from-violet to-[#7a68ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(142,124,255,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(142,124,255,0.45)]"
        >
          Demander un devis
        </a>
      </div>
    </header>
  );
}
