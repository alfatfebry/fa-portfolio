'use client';

import Link from 'next/link';
import { navItem } from '@/lib/navigation';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { direction, isAtop } = useScrollDirection();
  const isHidden = direction === 'down' && !isAtop;

  //console.log(direction, isAtop, isHidden);

  return (
    <header
      className={`sticky top-0 z-0 bg-background/20 backdrop-blur-md border-b border-foreground/20 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className='mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4'>
        <Link href='/' className='text-xl font-bold text-accent'>
          kangfeb.
        </Link>

        <ul className='flex gap-8'>
          {navItem.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className='text-sm font-semibold text-[15px] text-white transition-colors hover:text-accent'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex justify-end'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
