'use client';

import Link from 'next/link';
import { navItem } from '@/lib/navigation';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import ThemeToggle from './ThemeToggle';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import MenuButton from './MenuButton';
import { setMenuOpen } from '@/store/slices/uiSlice';

export default function Navbar() {
  const mode = useAppSelector((state) => state.theme.mode);
  const { direction, isAtop } = useScrollDirection();
  const isDark = mode === 'dark';
  const isMenuOpen = useAppSelector((state) => state.ui.isMenuOpen);
  const dispatch = useAppDispatch();
  const isHidden = direction === 'down' && !isAtop && !isMenuOpen;

  //console.log(direction, isAtop, isHidden);

  return (
    <header
      className={`sticky top-0 z-0 bg-background/20 backdrop-blur-md border-b border-foreground/20 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:grid md:grid-cols-[1fr_auto_1fr]'>
        <Link href='/' className='text-xl font-bold text-accent'>
          kangfeb.
        </Link>

        <ul className='gap-8 hidden md:flex'>
          {navItem.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-semibold text-[15px] transition-colors ${isDark ? 'text-foreground' : 'text-foreground'}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex justify-end items-center gap-3'>
          <ThemeToggle />
          <MenuButton />
        </div>
      </nav>

      {isMenuOpen && (
        <div className='px-6'>
          <ul>
            {navItem.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => dispatch(setMenuOpen(false))}
                  className='block py-3 text-lg font-semibold text-foreground'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
