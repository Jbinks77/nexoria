'use client';

import { FormEvent, useState } from 'react';

export function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSuccess(true);
    form.reset();
  };

  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <article>
          <h2 className="section-title">Contact</h2>
          <p className="section-copy max-w-xl">
            Décrivez votre projet en quelques lignes, je vous réponds rapidement avec une proposition adaptée.
          </p>
          <div className="mt-7 flex gap-3 text-sm">
            <a href="#" className="rounded-full border border-border/70 bg-white/75 px-3.5 py-2">Instagram</a>
            <a href="#" className="rounded-full border border-border/70 bg-white/75 px-3.5 py-2">LinkedIn</a>
            <a href="#" className="rounded-full border border-border/70 bg-white/75 px-3.5 py-2">Behance</a>
          </div>
        </article>

        <form onSubmit={handleSubmit} className="glass-card p-7" noValidate>
          <div className="grid gap-4">
            <label className="grid gap-1.5 text-sm" htmlFor="name">
              Nom
              <input id="name" name="name" required className="rounded-xl border border-border/70 bg-white px-3 py-2.5" />
            </label>
            <label className="grid gap-1.5 text-sm" htmlFor="email">
              Email
              <input id="email" name="email" type="email" required className="rounded-xl border border-border/70 bg-white px-3 py-2.5" />
            </label>
            <label className="grid gap-1.5 text-sm" htmlFor="type">
              Type de site
              <select id="type" name="type" required className="rounded-xl border border-border/70 bg-white px-3 py-2.5">
    <section id="contact" className="py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article>
          <h2 className="font-[var(--font-heading)] text-3xl font-bold sm:text-4xl">Contact</h2>
          <p className="mt-3 max-w-xl text-ink/75">
            Décrivez votre projet en quelques lignes, je vous réponds rapidement avec une proposition adaptée.
          </p>
          <div className="mt-6 flex gap-3 text-sm">
            <a href="#" className="rounded-full border border-border bg-white/70 px-3 py-1.5">Instagram</a>
            <a href="#" className="rounded-full border border-border bg-white/70 px-3 py-1.5">LinkedIn</a>
            <a href="#" className="rounded-full border border-border bg-white/70 px-3 py-1.5">Behance</a>
          </div>
        </article>

        <form onSubmit={handleSubmit} className="glass-card p-6" noValidate>
          <div className="grid gap-4">
            <label className="grid gap-1.5 text-sm" htmlFor="name">
              Nom
              <input id="name" name="name" required className="rounded-xl border border-border bg-white px-3 py-2" />
            </label>
            <label className="grid gap-1.5 text-sm" htmlFor="email">
              Email
              <input id="email" name="email" type="email" required className="rounded-xl border border-border bg-white px-3 py-2" />
            </label>
            <label className="grid gap-1.5 text-sm" htmlFor="type">
              Type de site
              <select id="type" name="type" required className="rounded-xl border border-border bg-white px-3 py-2">
                <option value="">Sélectionner…</option>
                <option>Site vitrine</option>
                <option>E-commerce</option>
                <option>Site entreprise</option>
                <option>Autre</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm" htmlFor="budget">
              Budget
              <select id="budget" name="budget" required className="rounded-xl border border-border/70 bg-white px-3 py-2.5">
                <option value="">Sélectionner…</option>
                <option>- 1000€</option>
                <option>1000€ - 2500€</option>
                <option>2500€ - 5000€</option>
                <option>+ 5000€</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm" htmlFor="message">
              Message
              <textarea id="message" name="message" rows={5} required className="rounded-xl border border-border/70 bg-white px-3 py-2.5" />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-full bg-gradient-to-r from-violet to-[#7563ff] px-5 py-3 font-semibold text-white shadow-[0_14px_28px_rgba(142,124,255,0.35)] transition hover:-translate-y-0.5"
            >
              Envoyer
            </button>
            {success && (
              <p className="rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                Merci, votre message a bien été envoyé.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
