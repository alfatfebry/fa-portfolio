'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const planets = [
  {
    name: 'blue',
    src: '/images/hero/planet-blue.svg',
    position: { top: '12%', right: '-6%' },
    sizeClass: 'h-44 w-44 md:h-80 md:w-80',
    float: 14,
    duration: 7,
    delay: 0,
    paralax: 120,
  },
  {
    name: 'red',
    src: '/images/hero/planet-red.svg',
    position: { top: '3%', right: '34%' },
    sizeClass: 'h-16 w-16 md:h-28 md:w-28',
    float: 10,
    duration: 5.5,
    delay: 1,
    paralax: 60,
  },
  {
    name: 'yellow',
    src: '/images/hero/planet-yellow.svg',
    position: { top: '4%', right: '10%' },
    sizeClass: 'h-10 w-10 md:h-16 md:w-16',
    float: 8,
    duration: 4.5,
    delay: 0.5,
    paralax: 40,
  },
];

type PlanetData = (typeof planets)[number];

function Planet({ planet }: { planet: PlanetData }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, planet.paralax]);

  return (
    <motion.div className='absolute' style={{ ...planet.position, y }}>
      <motion.div
        className={`relative ${planet.sizeClass}`}
        animate={{ y: [0, -planet.float, 0] }}
        transition={{
          duration: planet.duration,
          delay: planet.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Image
          src={planet.src}
          alt=''
          fill
          sizes='(min-width:768px) 320px, 176px'
          className='object-contain'
          loading='eager'
        />
      </motion.div>
    </motion.div>
  );
}

export default function Planets() {
  return (
    <div className='absolute pointer-events-none inset-0' aria-hidden='true'>
      {planets.map((planet) => (
        <Planet key={planet.name} planet={planet} />
      ))}
    </div>
  );
}
