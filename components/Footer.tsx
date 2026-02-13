import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo-nexiora.png" alt="Logo Nexiora" width={160} height={40} className="h-10 w-auto" />
        </div>
        <nav aria-label="Navigation pied de page" className="flex flex-wrap justify-center gap-4 text-ink/70">
          <a href="#services">Services</a>
          <a href="#creations">Mes créations</a>
          <a href="#offre">Offre</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="text-ink/60">© {new Date().getFullYear()} Nexiora. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
