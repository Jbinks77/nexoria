import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Creations } from '@/components/Creations';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LaunchOffer } from '@/components/LaunchOffer';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Creations />
        <LaunchOffer />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
