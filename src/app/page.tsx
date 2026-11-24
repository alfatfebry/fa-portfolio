import Hero from '@/features/home/components/Hero';
import Marquee from '@/features/home/components/Marquee';
import ServiceAccordion from '@/features/services/components/ServiceAccordion';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceAccordion />
      <Marquee />
    </main>
  );
}
