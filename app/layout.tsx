import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nexiora — Sites web & graphisme premium',
  description:
    'Nexiora conçoit des sites web modernes, rapides et orientés conversion : web design, développement et identité visuelle.',
  openGraph: {
    title: 'Nexiora — Sites web & graphisme premium',
    description:
      'Création de sites vitrine, e-commerce et branding/UI avec une direction artistique premium.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-[var(--font-body)]">{children}</body>
    </html>
  );
}
