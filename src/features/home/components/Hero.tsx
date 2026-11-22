import Link from 'next/link';
import Stars from './Stars';
import Cloud from './CLoud';
import Planets from './Planets';

export default function Hero() {
  return (
    <section className='h-[1000px] relative overflow-hidden bg-linear-to-b from-scene-top to-scene-bottom'>
      {/* Stars Component */}
      <Stars />
      {/* Planet Component */}
      <Planets />
      {/* Cloud Component */}
      <Cloud top='12%' size={1} duration={100} delay={-20} opacity={0.9} />
      <Cloud top='55%' size={1.4} duration={120} delay={-70} opacity={0.8} />
      <Cloud top='78%' size={0.8} duration={65} delay={-40} opacity={0.7} />

      <div className='relative mx-auto max-w-6xl px-6 py-24 md:py-40'>
        <h1 className='text-5xl font-medium leading-tight text-white md:text-7xl'>
          <span className='block'>i am Febry</span>
          front-end engineer
        </h1>
        <p className='mt-6 max-w-md text-white/70'>
          The combination of my passion for web design
        </p>
        <Link
          href='/'
          className='mt-8 inline-block rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent'
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
